

class PieChart{

constructor(chosenSize, groupSplitObj){
    this.chosenSize = chosenSize;
    this.groupSplitObj = groupSplitObj;
}

draw() {

    c.clearRect(0,0,canvas.width, canvas.height);

    let size = obj.size;
    if(this.chosenSize !== undefined) {
        size = this.chosenSize;
    }

    let angles = ;

    

    let colors = randomColors(size)
    
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

calculateAngles(){
    let chosenGroup = [];

    this.groupSplitObj.chosenGroup.forEach(element => {
        if (element.length === this.chosenSize) {
            chosenGroup = [...element]
        }

    });

    if (chosenGroup.length === 0) {
        for (let i = 0; i < this.chosenSize; i++) {
            chosenGroup.push(1);            
        }
    }

    let fractions = 2 / this.groupSplitObj.size;
    return chosenGroup.map(angle => angle*fractions*Math.PI)
}
        
        
        
        
        

        
    
