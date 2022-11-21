
import isPrime from "./helper/isPrime.js"

let buttonContainer = document.querySelector("#select-options-box");

function renderOptions(groupLog) {
    buttonContainer.replaceChildren();

    for (let i = 0; i < groupLog.amountOfGroups.length; i++) {
        let btn = document.createElement("button");
        btn.classList.add("btn-style");

        // if ( isPrime(groupLog.size) ) {
        //     btn.value = groupLog.amountOfGroups[i];
        // } else btn.value = groupLog.amountOfGroups[i];

        btn.value = groupLog.amountOfGroups[i];

        btn.innerHTML = groupLog.toText[i];
        buttonContainer.appendChild(btn)
    }        
}

export default renderOptions;