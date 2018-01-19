// neem een willekeurig getal tussen 0 en 479
var random = Math.floor(Math.random() * words.length);
//kies het woord op die positie in de woord array
var answer = words[random];
//hak het woord in losse letters
var answerArray = answer.split("");
// zet antwoord in de console
console.log(answerArray);

// Zet de checkBtn in een variabele
var checkBtn = document.getElementById('check');
var nextBtn = document.getElementById('next');
var input2 = document.getElementById("input2");

// koppel de check function aan de knop
checkBtn.setAttribute("onclick", "check();");
nextBtn.setAttribute("onclick", "restart();")

var j = 0
document.getElementById("letter_0").value=answerArray[0];
function check(){
	win = 0

		for(var i = 0; i <=4; i++){
			var input = document.getElementById("letter_" + i);
			if(input.value.toLowerCase() == answerArray[i]){
		        input.style.backgroundColor = "red"
		        win++
			} else if (answerArray.includes(input.value)) {
	            input.style.backgroundColor = "yellow"
	        } else {
	        input.style.backgroundColor = "blue"
	    	}
	    }
	    j++
	if(j == 6){
		input2.style.display = "none"
		space.style.display = "block"
		if (confirm("Game Over") == true) {
        	location.reload();
        } else {
        	location.reload();
        }
	}
	if(win === 5){
		if (confirm("Gewonnen") == true) {
        	location.reload();
        } else {
        	location.reload();
        }
	}
}

function restart() {
	location.reload();
}