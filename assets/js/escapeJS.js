//Select DOM elements
var input = document.querySelectorAll("input");
var enter = document.querySelector("a");
//when "unlocked" is set to [1,1,1] the puzzle will be solved
var unlocked = [0, 0, 0];
var checked = false;

//The first input needs to be T for page to unlock
input[0].addEventListener("input", function(e){
	if(this.value === "T" || this.value === "t") {
		unlocked[0] = 1;
	}
	//change focus to next input when character entered
	changeInputFocus(1, e);
	//check if all inputs have been correctly entered
	if (checked === false) {
		checkCode();
	}
});

//The second input needs to be G for page to unlock
input[1].addEventListener("input", function(e){
	if(this.value === "G" || this.value === "g") {
		unlocked[1] = 1;
	}
	changeInputFocus(2, e);
	if (checked === false) {
		checkCode();
	}
});

//The third input needs to be E for page to unlock
input[2].addEventListener("input", function(e){
	if(this.value === "E" || this.value === "e") {
		unlocked[2] = 1;
	}
	changeInputFocus(0, e);
	if (checked === false) {
		checkCode();
	}
});

//checkCode functions checks if "unlocked" is set to [1,1,1],
//if yes, display the link to move on to next puzzle
function checkCode() {
	var a = [1,1,1];
	for (let i=0; i < unlocked.length; i++) {
		if (unlocked[i] !== a[i]) {
			return false;
		}
	}
	enter.classList.add("showEnter");
	//fade in link
	var op = 0.1;
	var timer = setInterval(function(){
		if (op >= 1){
			clearInterval(timer);
		}
		enter.style.opacity = op;
		op = op + 0.05;
	}, 50);

	for (let i = 0; i < input.length; i++) {
		input[i].addEventListener("keydown", function (e) {
			if (e.code === "Enter") {
				enter.click()
			}
		});
	}
	checked = true;
}

//function to change input focus, except when delete or backspace is pressed
function changeInputFocus(num, e) {
	var type = e.inputType;

	if (type !== "deleteContentBackward" && 
		type !== "deleteContentForward") {
		input[num].focus();
	}
}