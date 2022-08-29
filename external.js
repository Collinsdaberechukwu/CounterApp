//document.getElementById("count-el").innerHTML=5
function increment(){
    console.log("The Button was Clicked");
}
//camelCase
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count=0
}