import PieChart from "./pieChart.js"

let canvas = document.querySelector("#canvas");
let c = canvas.getContext("2d");

import renderOptions from "./renderOptions.js"
import randomColors from "./helper/randomColors.js"
import calculateGroupSize from "./calculateGroupSize.js";

// window.addEventListener("resize", evt => {
//     console.log("width: "+evt.currentTarget.innerWidth+"  height: "+evt.currentTarget.innerHeight);
// })

let rawInput = document.querySelector("#size-or-name-input");
let outputContainer = document.querySelector("#canvas-wrapper");
let randomizeBtn = document.querySelector("#random-btn");
let groupSizeSelectBTN = document.querySelector("#select-options-box");

let groupSplitObj;
let chosenGroupSize = undefined;
let timeout = null;

rawInput.addEventListener("keyup" , (e) => {

    randomizeBtn.hidden = true;
    c.clearRect(0, 0, canvas.width, canvas.height);
    groupSizeSelectBTN.replaceChildren();
    canvas.classList.remove("rotate");


    groupSplitObj = {
        size: null,
        isPrime: false,
        amountOfGroups: [],
        nameSplit: [],
        groups: [],
        toText: []
    }

    clearTimeout(timeout);

    timeout = setTimeout(() => {
        if (e.target.value.trim().length >= 1) {
            trigger(e)
        } 
    }, 700);
});




function trigger(e) {
    
    if (isNaN(e.target.value)) {
        clearTimeout(timeout);


        let rawInput = e.target.value;
        let nameArray = rawInput.split(/(?:,| )+/);
        groupSplitObj.nameSplit = [...nameArray];
        groupSplitObj.size = nameArray.length;


        //let hardcode = ["Elham", "Nina", "Sophie", "Gaby", "Tenaw", "Hoa", "Timur", "Hannes", "Marco", "Ammar", "Ahmad", "Martin"]
        //Elham, Nina, Sophie, Gaby, Tenaw, Hoa, Timur, Hannes, Marco, Ammar, Ahmad, Martin




        timeout = setTimeout(() => {
            groupSplitObj = calculateGroupSize(groupSplitObj);
            renderOptions(groupSplitObj);
            renderChart(0, groupSplitObj);
        }, 1500);




    } else {

        groupSplitObj.size = parseInt(e.target.value);
        if (groupSplitObj.size > 1) {
            groupSplitObj = calculateGroupSize(groupSplitObj);
            renderOptions(groupSplitObj);
            renderChart(0, groupSplitObj);
        } 


    }

}


    
groupSizeSelectBTN.addEventListener("click", opt => {
    groupSizeSelectBTN.replaceChildren();

    canvas.classList.toggle("rotate");

    chosenGroupSize = parseInt(opt.target.value);

    renderChart(chosenGroupSize, groupSplitObj);
});

randomizeBtn.addEventListener("click", (evt) => {

    canvas.classList.toggle("rotate-back");

});


function renderChart(chosenGroupSize, groupSplitObj){
    randomizeBtn.hidden = false;
    let chart = new PieChart(chosenGroupSize, groupSplitObj);
    chart.draw();
}



















  


