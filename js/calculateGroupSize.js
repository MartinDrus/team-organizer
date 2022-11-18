
import isPrime from "./helper/isPrime.js";

function calculateGroupSize(size){
    let splitLog = {
        size: size,
        isPrime: false,
        amountOfGroups: [],
        groups: [],
        toText: []
    }

    if(size >= 4) {
        for (let i = 2; i < size; i++) {
            let subGroup = [];
            if (isPrime(size)) {
                splitLog.isPrime = true;
                if ((((size-1)/i)-1 > 0)&&(size-1)%i===0) {
                    for (let j = 0; j < i-1; j++) {
                        subGroup.push((size-1)/i)   
                    }
                    subGroup.push(((size-1)/i)+1)
                    splitLog.amountOfGroups.push((size-1)/i);
                    splitLog.groups.push(subGroup)
                    let text = `${(((size-1)/i)-1)} x ${i} + 1 x ${i+1}`
                    splitLog.toText.push(text);
                }      
            } else {
                if (size%i===0) {
                    splitLog.amountOfGroups.push(size/i);
                    for (let j = 0; j < i; j++) {
                        subGroup.push((size)/i)
                    }
                    splitLog.groups.push(subGroup)
                    let text = `${((size)/i)} x ${i}`
                    splitLog.toText.push(text);
                }   
            }
        }
    } else console.log("Group to small");
    return splitLog
};

export default calculateGroupSize;