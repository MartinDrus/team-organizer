
let canvas = document.querySelector("#canvas");
let c = canvas.getContext("2d");

class PieSlice{

    // Used to calculate the X and Y offset
    offsetX;
    offsetY;
    medianAngle;

    constructor(id, beginAngle, endAngle, color){

        this.id = id;

        this.beginAngle = beginAngle;
        this.endAngle = endAngle;

        this.offset = 10;
    
        this.middleX = canvas.width/2;
        this.middleY = canvas.height/2;
        this.radius = ((canvas.width/2) - this.offset);

        this.color = color;
    }

    getId(){
        return this.id;
    }

    getColor(){
        return this.color;
    }


    draw(){
        canvas.classList.toggle("rotate");

        // The medium angle is the average of two consecutive angles
        this.medianAngle = (this.endAngle + this.beginAngle) / 2;
        
        // X and Y calculations
        this.offsetX = Math.cos(this.medianAngle) * this.offset;
        this.offsetY = Math.sin(this.medianAngle) * this.offset;
        
        c.beginPath();
        c.fillStyle = this.color;
        
        // Adding the offsetX and offsetY to the center of the arc
        c.moveTo(this.middleX + this.offsetX, this.middleY + this.offsetY);
        c.arc(this.middleX + this.offsetX, this.middleY + this.offsetY, this.radius, this.beginAngle, this.endAngle);
        c.lineTo(this.middleX + this.offsetX, this.middleY + this.offsetY);
        c.stroke();
        c.fill();


        // Set Text
        let labelX = c.canvas.width / 2 + (this.radius / 2) * Math.cos(this.beginAngle + (this.endAngle - this.beginAngle) / 2);
        let labelY = c.canvas.height / 2 + (this.radius / 2) * Math.sin(this.beginAngle + (this.endAngle - this.beginAngle) / 2)
        c.fillStyle = "white";
        c.font = "bold 20px Arial";
        c.fillText(`${this.id}`, labelX, labelY);
    }








}

export default PieSlice;