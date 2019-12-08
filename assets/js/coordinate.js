let grid = document.querySelectorAll(".grid-items");
let input = document.querySelectorAll("input");
let enter = document.querySelectorAll("span")[1];
let treasure = Math.floor(Math.random() * 27);

for (let i = 0; i < (grid.length - 14); i++) {
    grid[i].addEventListener("mouseover", function () {
        if (i !== treasure) {this.style.backgroundColor = "gray";}
        else {this.style.backgroundColor = "red";}
    });

    grid[i].addEventListener("mouseleave", function () {
            if (i % 2 === 0) {grid[i].style.backgroundColor = "white";}
            else {grid[i].style.backgroundColor = "black";}
    });
}

var n = Math.floor(treasure / 7);
var x = (treasure - 7*n) + 1;
y = n + 1;

for (let j = 0; j < input.length; j++) {
    input[j].addEventListener("input", function () {
        if (input[0].value === x.toString() && input[1].value === y.toString()) {
            showEnter();
        }
    })
}

function showEnter() {
    enter.textContent = "";
    enter.setAttribute("id", "enter");
    enter.innerHTML = "<a href=\"soon.html\">Enter</a>";


    var op = 0.1;
    var timer = setInterval(function(){
        if (op >= 1){
            clearInterval(timer);
        }
        enter.style.opacity = op;
        op = op + 0.05;
    }, 50);

    for (let k = 0; k < input.length; k++) {
        input[k].addEventListener("keydown", function (e) {
            if (e.code === "Enter") {
                document.querySelector("a").click();
            }
        });
    }
}
