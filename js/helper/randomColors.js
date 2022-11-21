
function randomColors(amountOfNeededColors) {
    let colorArray = [];
    for (let i = 0; i < amountOfNeededColors; i++) {

      let r = Math.floor(Math.random()*200+25);
      let g = Math.floor(Math.random()*200+25);
      let b = Math.floor(Math.random()*200+25);

      let randomColor = `rgb(${r},${g},${b})`;
      colorArray.push(randomColor);
    }
    return colorArray;
}
export default randomColors;