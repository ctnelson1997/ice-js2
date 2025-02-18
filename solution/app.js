console.log("Hello world!")

function calculate() {
    const n1 = getNum1();
    const n2 = getNum2();
    const op = getOperation();
    
    if (n1 === null || n2 === null) {
        if (n1 === null && n2 === null) {
            alert("Please enter a number in Number 1 and Number 2!")
        } else if (n1 === null) {
            alert("Please enter a number in Number 1!")
        } else if (n2 === null) {
            alert("Please enter a number in Number 2!")
        } else {
            alert("This will NEVER happen, can you explain why?")
        }
    } else {
        let result;
        if (op === "Add") {
            result = n1 + n2;
        } else if (op === "Subtract") {
            result = n1 - n2;
        } else if (op === "Multiply") {
            result = n1 * n2;
        } else if (op === "Divide") {
            result = n1 / n2;
        } else {
            result = 0; // This should never happen!
        }
        alert(`The answer is ${result}`)
    }
}
