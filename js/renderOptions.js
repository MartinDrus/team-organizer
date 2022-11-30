
import isPrime from "./helper/isPrime.js"

let outputContainer = document.querySelector("#select-options-box");

function renderOptions(groupLog) {
    outputContainer.replaceChildren();

    
        for (let i = 0; i < groupLog.amountOfGroups.length; i++) {
            let btn = document.createElement("button");
            btn.classList.add("btn-style");

            // if ( isPrime(groupLog.size) ) {
            //     btn.value = groupLog.amountOfGroups[i];
            // } else btn.value = groupLog.amountOfGroups[i];

            btn.value = groupLog.amountOfGroups[i];

            btn.innerHTML = groupLog.toText[i];
            outputContainer.appendChild(btn)
        } 
    


        // let elGroup = document.createElement("div");
        // elGroup.classList.add("group-div-container");



        // outputContainer.appendChild(elGroup);

      
}

export default renderOptions;