import randomColors from "./helper/randomColors.js";
import PieSlice from "./pieSlice.js";

let canvas = document.querySelector("#canvas");
let c = canvas.getContext("2d");

let outputContainer = document.querySelector("#select-options-box");

class PieChart {
  constructor(chosenSize, groupSplitObj) {
    //Wenn nicht ausgewählt = 0
    this.chosenSize = chosenSize;
    this.groupSplitObj = groupSplitObj;
    this.splittedGroups = [];
    this.colorArray = randomColors(groupSplitObj.size);
  }

  draw() {
    c.clearRect(0, 0, canvas.width, canvas.height);

    canvas.classList.toggle("rotate");
    //transform: rotate(1080deg);
    // canvas.style.transform = "rotate(1080deg)";

    let angles = this.calculateAngles();

    let beginAngle = 0;
    let endAngle = 0;


    for (let i = 0; i < angles.length; i = i + 1) {
      let color = this.colorArray[i];

      beginAngle = endAngle;
      endAngle = endAngle + angles[i];
      let groupMemberName = null;
      if (this.groupSplitObj.nameSplit.length > 0) {
        groupMemberName = this.groupSplitObj.nameSplit[i];
      }

      let pieSlice = new PieSlice(i + 1, groupMemberName, beginAngle, endAngle, color);
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

      if (this.groupSplitObj.nameSplit.length > 0) {
        this.splitTeam(chosenGroup);
      } else {
        for (let i = 0; i < this.groupSplitObj.size; i++) {
          this.groupSplitObj.nameSplit.push(i+1)
        }
        this.splitTeam(chosenGroup);
      }
    }
    let fractions = 2 / this.groupSplitObj.size;
    return chosenGroup.map((angle) => angle * fractions * Math.PI);
  }

  splitTeam(chosenGroup){
    chosenGroup.forEach(amountOfPeople => {
      let subGroup = [];
      for (let i = 0; i < amountOfPeople; i++) {
        let randomIndex = Math.floor(Math.random()*this.groupSplitObj.nameSplit.length)
        const member = this.groupSplitObj.nameSplit[randomIndex];
        this.groupSplitObj.nameSplit.splice(randomIndex, 1);
        subGroup.push(member)
      }
      this.splittedGroups.push(subGroup);
    })
    this.displaySubgroups(this.splittedGroups);
  }

  displaySubgroups(groupObj) {
    groupObj.forEach((group, index) => {
      let subgroupContainer = document.createElement("div");
      subgroupContainer.classList.add("subgroup-container")
      subgroupContainer.style.backgroundColor = this.colorArray.at(index);

      let team = "";
      group.forEach((member, index) => {
        if (index === 0) {
          team += `${member} `;

        } else {
          team += `& ${member} `;
        }
      });
      subgroupContainer.textContent = team;
      outputContainer.appendChild(subgroupContainer);
    })
  }
}



export default PieChart;
