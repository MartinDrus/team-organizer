
let canvas = document.querySelector("#canvas");
let c = canvas.getContext("2d");

import renderOptions from "./renderOptions.js"

window.addEventListener("resize", evt => {
    console.log("width: "+evt.currentTarget.innerWidth+"  height: "+evt.currentTarget.innerHeight);

})


// let rawInput = document.querySelector("#size-or-name-input");

// rawInput.addEventListener("input" , (e) => {
//     console.log(e.target.value);
// });

function subGroupSize(size){
    let splitLog = {
        size: size,
        isPrime: false,
        amountOfGroups: [],
        groups: [],
        toText: []
    }

    if(size >= 4) {
        for (let i = 2; i < size; i++) {
            let subGroup = [];
            if (isPrime(size)) {
                splitLog.isPrime = true;
                if ((((size-1)/i)-1 > 0)&&(size-1)%i===0) {
                    for (let j = 0; j < i-1; j++) {
                        subGroup.push((size-1)/i)   
                    }
                    subGroup.push(((size-1)/i)+1)
                    splitLog.amountOfGroups.push((size-1)/i);
                    splitLog.groups.push(subGroup)
                    let text = `${(((size-1)/i)-1)} x ${i} + 1 x ${i+1}`
                    splitLog.toText.push(text);
                }      
            } else {
                if (size%i===0) {
                    splitLog.amountOfGroups.push(size/i);
                    for (let j = 0; j < i; j++) {
                        subGroup.push((size)/i)
                    }
                    splitLog.groups.push(subGroup)
                    let text = `${((size)/i)} x ${i}`
                    splitLog.toText.push(text);
                }   
            }
        }
    } else console.log("Group to small");
    return splitLog
}

function isPrime(num){
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false; 
        return num > 1;
}

let obj = subGroupSize(16);

renderOptions(obj);


let groupSizeSelectBTN = document.querySelectorAll(".btn-style");
groupSizeSelectBTN.forEach(btn => {
    btn.addEventListener("click", opt => {
        let chosenGroupSize = parseInt(opt.currentTarget.value);
        let angleArray = calculateAngles(obj, chosenGroupSize);
        let colorArray = randomColors(angleArray);

        window.onload = draw(angleArray, colorArray);


    })
})

calculateAngles(obj, obj.size)

function calculateAngles(obj, chosenSize) {

    let chosenGroup = [];

    obj.groups.forEach(opt => {
        if (opt.length === chosenSize) {
            chosenGroup = [...opt];
        } 
    });
    if (chosenGroup.length === 0) {
        for (let i = 0; i < chosenSize; i++) {
            chosenGroup.push(1);
        }
    }
    console.log(chosenGroup);
    let fractions = 2/obj.size;
    return chosenGroup.map(angle => angle*fractions*Math.PI)
}


function randomColors(array) {
    let colorArray = []

    for (let i = 0; i < array.length; i++) {

      let r = Math.floor(Math.random()*200+25);
      let g = Math.floor(Math.random()*200+25);
      let b = Math.floor(Math.random()*200+25);

      let randomColor = `rgb(${r},${g},${b})`;
      colorArray.push(randomColor);
    }

    return colorArray;
}




function draw(angleArray, colorArray) {

    c.clearRect(0,0,canvas.width, canvas.height)

    // Base offset distance of 10
    let offset = 10;
    let beginAngle = 0;
    let endAngle = 0;

    let middleX = canvas.width/2;
    let middleY = canvas.height/2;
    let radius = ((canvas.width/2) - offset)

    let colors = Array.from(colorArray)
    let angles = Array.from(angleArray)
    
    
    // Used to calculate the X and Y offset
    let offsetX, offsetY, medianAngle;
    
    for(let i = 0; i < angles.length; i = i + 1) {
      beginAngle = endAngle;
      endAngle = endAngle + angles[i];
      
      // The medium angle is the average of two consecutive angles
      medianAngle = (endAngle + beginAngle) / 2;
      
      // X and Y calculations
      offsetX = Math.cos(medianAngle) * offset;
      offsetY = Math.sin(medianAngle) * offset;
      
      c.beginPath();
      c.fillStyle = colors[i % colors.length];
      
      // Adding the offsetX and offsetY to the center of the arc
      c.moveTo(middleX + offsetX, middleY + offsetY);
      c.arc(middleX + offsetX, middleY + offsetY, radius, beginAngle, endAngle);
      c.lineTo(middleX + offsetX, middleY + offsetY);
      c.stroke();
      c.fill();
    }
  }




  


