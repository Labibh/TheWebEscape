//select all required DOM elements
var redPick = document.querySelectorAll("#red span");
var greenPick = document.querySelectorAll("#green span");
var bluePick = document.querySelectorAll("#blue span");
var theVoid = document.getElementById("theVoid");
var enter = document.querySelector("a");
//vColor keeps track of what combination of colors are selected
var vColor = ["0","0","0"];

selectColor(redPick);
selectColor(greenPick);
selectColor(bluePick);

//selectColor listens for when a color is clicked, and adds that
//color to vColor, if all correct colors are selected, the puzzle
//will be solved
function selectColor(colorPick) {
    for(var i=0; i < colorPick.length; i++) {
        colorPick[i].addEventListener("click", function() {

            //mix selected color into theVoid
            mixVoidColors(this.style.backgroundColor);

            //change border of selected colors to black
            for (var k=0; k < colorPick.length; k++) {
                colorPick[k].style.border = "10px solid white";
                this.style.border = "10px solid black";
            }
            //puzzle complete if all selected colors are correct
            accessGranted();
        })
    }
}

//set void color
function voidColor(r, g, b) {
    theVoid.style.backgroundColor = "rgb(" + r.toString() + ", " + g.toString()
    + ", " + b.toString() + ")";
}

//set the color values for the Void
function mixVoidColors(color) {
    let colorsOnly = color.substring(color.indexOf('(') + 1,
        color.lastIndexOf(')')).split(/,\s*/);

    let red = colorsOnly[0];
    let green = colorsOnly[1];
    let blue = colorsOnly[2];

    if (red !== "0") {vColor[0] = red}
    if (green !== "0") {vColor[1] = green}
    if (blue !== "0") {vColor[2] = blue}

    voidColor(vColor[0], vColor[1], vColor[2]);
}

//functions unlocks next page
function accessGranted() {
    let colorCode = ["220","120","50"];
    for (let i = 0; i < vColor.length; i++) {
        if (colorCode[i] !== vColor[i]) {return false}
    }
        console.log("success");
        enter.classList.add("showEnter");

        var op = 0.1;
        var timer = setInterval(function(){
            if (op >= 1){
                clearInterval(timer);
            }
            enter.style.opacity = op;
            op = op + 0.05;
        }, 50);
}