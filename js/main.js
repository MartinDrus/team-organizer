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

let groupSplitObj = undefined;
let chosenGroupSize = undefined;

rawInput.addEventListener("input" , (e) => {
    trigger(e)
});




function trigger(e) {
    
    if (isNaN(e.target.value)) {
        let temp = e.target.value;
        let nameSplit = temp.split(/(?:,| )+/);
        groupSplitObj = calculateGroupSize(nameSplit.length);
        renderChart(0, groupSplitObj);

    } else {
        let size = parseInt(e.target.value);
        groupSplitObj = calculateGroupSize(size);
        renderChart(0, groupSplitObj);

    }

    if (groupSplitObj !== undefined) {
        renderOptions(groupSplitObj);
    }
}


let groupSizeSelectBTN = document.querySelector("#select-options-box");
groupSizeSelectBTN.addEventListener("click", opt => {
        chosenGroupSize = parseInt(opt.target.value);
        renderChart(chosenGroupSize, groupSplitObj);
        groupSizeSelectBTN.replaceChildren();
    });

function renderChart(chosenGroupSize, groupSplitObj){
    let chart = new PieChart(chosenGroupSize, groupSplitObj);
    chart.draw();

}

// let test = document.querySelector("#test");
// test.addEventListener("click", e => {
//     canvas.classList.toggle("rotate");
// })

















  


