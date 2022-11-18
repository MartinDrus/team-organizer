
let canvas = document.querySelector("#canvas");
let c = canvas.getContext("2d");

import renderOptions from "./renderOptions.js"
import randomColors from "./helper/randomColors.js"
import calculateGroupSize from "./calculateGroupSize.js";

window.addEventListener("resize", evt => {
    console.log("width: "+evt.currentTarget.innerWidth+"  height: "+evt.currentTarget.innerHeight);
})

let rawInput = document.querySelector("#size-or-name-input");

let groupSplitObj = undefined;
let chosenGroupSize = undefined;

rawInput.addEventListener("input" , (e) => {
    trigger(e)
});




function trigger(e) {
    
    if (isNaN(e.target.value)) {
        let temp = e.target.value;
        groupSplitObj = calculateGroupSize(temp);
        renderChart(chosenGroupSize, groupSplitObj);

    } else {
        let size = parseInt(e.target.value);
        groupSplitObj = calculateGroupSize(size);
    }

    if (groupSplitObj !== undefined) {
        renderOptions(groupSplitObj);
    }
}


let groupSizeSelectBTN = document.querySelectorAll(".btn-style");
groupSizeSelectBTN.forEach(btn => {
    btn.addEventListener("click", opt => {
        chosenGroupSize = parseInt(opt.currentTarget.value);
        renderChart(chosenGroupSize, groupSplitObj);
    });
});

function renderChart(chosenGroupSize, groupSplitObj){
    let chart = new PieChart(chosenGroupSize, groupSplitObj);
    chart.draw();

}















  


