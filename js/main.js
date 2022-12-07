import PieChart from "./pieChart.js"

let canvas = document.querySelector("#canvas");
let c = canvas.getContext("2d");

import renderOptions from "./renderOptions.js"
import randomColors from "./helper/randomColors.js"
import calculateGroupSize from "./calculateGroupSize.js";

import PieSlice from "./pieSlice.js"

// window.addEventListener("resize", evt => {
//     console.log("width: "+evt.currentTarget.innerWidth+"  height: "+evt.currentTarget.innerHeight);
// })

let rawInput = document.querySelector("#size-or-name-input");
let startBtn = document.querySelector("#start-button");
let randomizeBtn = document.querySelector("#random-btn");
let groupSizeSelectBTN = document.querySelector("#select-options-box");

let arrow = document.querySelector("#arrow")

let groupSplitObj;
let chosenGroupSize = undefined;
let turnsInDegree = 0;


startBtn.addEventListener("click" , () => {
    randomizeBtn.hidden = true;
    c.clearRect(0, 0, canvas.width, canvas.height);
    groupSizeSelectBTN.replaceChildren();

    if (turnsInDegree !== 0) {
        turnsInDegree = 0;
        canvas.style.transform = `rotate(${turnsInDegree}deg)`;
    } else {
        turnsInDegree = 1080;
        canvas.style.transform = `rotate(${turnsInDegree}deg)`;
    }


    groupSplitObj = {
        size: null,
        isPrime: false,
        amountOfGroups: [],
        nameSplit: [],
        groups: [],
        toText: []
    }


        if (rawInput.value.trim().length >= 1) {
            trigger(rawInput.value);
        } 
});




function trigger(value) {
    
    if (isNaN(value)) {


        
        let nameArray = value.split(/(?:,| )+/);
        let shuffledNameArray = nameArray.sort((a, b) => 0.5 - Math.random());
        groupSplitObj.nameSplit = [...shuffledNameArray];
        groupSplitObj.size = nameArray.length;


        //let hardcode = ["Elham", "Nina", "Sophie", "Gaby", "Tenaw", "Hoa", "Timur", "Hannes", "Marco", "Ammar", "Ahmad", "Martin"]
        //Elham, Nina, Sophie, Gaby, Tenaw, Hoa, Timur, Hannes, Marco, Ammar, Ahmad, Martin


  
        groupSplitObj = calculateGroupSize(groupSplitObj);
        renderOptions(groupSplitObj);
        renderChart(0, groupSplitObj);
       

    } else {

        groupSplitObj.size = parseInt(value);
        if (groupSplitObj.size > 1) {
            groupSplitObj = calculateGroupSize(groupSplitObj);
            renderOptions(groupSplitObj);
            renderChart(0, groupSplitObj);
        } 


    }

}
    
groupSizeSelectBTN.addEventListener("click", opt => {
    groupSizeSelectBTN.replaceChildren();

    canvas.classList.toggle("rotate-back");

    chosenGroupSize = parseInt(opt.target.value);

    renderChart(chosenGroupSize, groupSplitObj);
});

randomizeBtn.addEventListener("click", () => {
    arrow.hidden = false;
    let randomNumber = Math.floor(Math.random()*6000+800)
    turnsInDegree += randomNumber;

    console.log(turnsInDegree);

    // let canvasContainer = document.querySelector("#canvas-wrapper");

    console.log();

    // canvasContainer.style.transform = `rotate(${turnsInDegree}deg)`;

    canvas.style.transform = `rotate(${turnsInDegree}deg)`;

    PieSlice.prototype.draw(true)

});


function renderChart(chosenGroupSize, groupSplitObj){
    randomizeBtn.hidden = false;
    let chart = new PieChart(chosenGroupSize, groupSplitObj);
    chart.draw();
}



















  


