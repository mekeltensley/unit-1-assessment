
let number = document.getElementById("number").value = 1;
let label = document.getElementById("label").innerHTML = 0;

let add = document.querySelector("#add");

let subtract = document.querySelector("#subtract");

add.addEventListener("click", function () {
    let value = document.getElementById("number").value = ++number;
    document.getElementById("label").innerHTML = value;   
});

subtract.addEventListener("click", function () {
    let value = document.getElementById("number").value = --number;
    document.getElementById("label").innerHTML = value;
        if (value < 0) {
            document.getElementById("label").style.color = "#FF0000";
        } 
});