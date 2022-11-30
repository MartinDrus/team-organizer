import randomColors from "./helper/randomColors.js";
import PieSlice from "./pieSlice.js";

let canvas = document.querySelector("#canvas");
let c = canvas.getContext("2d");

class PieChart {
  constructor(chosenSize, groupSplitObj) {
    //Wenn nicht ausgewählt = 0
    this.chosenSize = chosenSize;
    this.groupSplitObj = groupSplitObj;
  }

  draw() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    canvas.classList.toggle("rotate");
    //transform: rotate(1080deg);
    // canvas.style.transform = "rotate(1080deg)";


    let angles = this.calculateAngles();

    let beginAngle = 0;
    let endAngle = 0;

    let colors = randomColors(angles.length);

    for (let i = 0; i < angles.length; i = i + 1) {
      let color = colors[i];

      beginAngle = endAngle;
      endAngle = endAngle + angles[i];
      let groupMemberName = null;
      if (this.groupSplitObj.nameSplit.length > 0) {
        groupMemberName = this.groupSplitObj.nameSplit[i];
      }

      let pieSlice = new PieSlice(i + 1, groupMemberName,beginAngle, endAngle, color);

      pieSlice.draw();
    }

  }

  calculateAngles() {
    let chosenGroup = [];
    if (this.chosenSize === 0) {
      for (let i = 0; i < this.groupSplitObj.size; i++) {
        chosenGroup.push(1);
      }
    } else {
      this.groupSplitObj.groups.forEach((element) => {
        if (element.length === this.chosenSize) {
          chosenGroup = [...element];




        }
      });
      console.log(this.groupSplitObj);
      console.log(chosenGroup);
      this.splitTeam(chosenGroup)
    }
    let fractions = 2 / this.groupSplitObj.size;
    return chosenGroup.map((angle) => angle * fractions * Math.PI);
  }

  splitTeam(chosenGroup){



  }


}



export default PieChart;
