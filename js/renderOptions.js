
let buttonContainer = document.querySelector("#select-options-box");

function renderOptions(groupLog) {
    for (let i = 0; i < groupLog.amountOfGroups.length; i++) {
        let btn = document.createElement("button");
        btn.classList.add("btn-style");
        btn.value = groupLog.amountOfGroups[i];
        btn.innerHTML = groupLog.toText[i];
        buttonContainer.appendChild(btn)
    }        
}

export default renderOptions;