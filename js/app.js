window.onload = function() {
    document.getElementById("poppin").onclick = wassPoppin;
}

const wassPoppin = function () {

	do {
		var input = (prompt("Hey elites, chris is gay. Yes or No? "))
		if (input == null) {
			alert("you didn't say yes. So try again")
		}
		else if (input == "no" || input == "No") {
			alert('Wrong, try again.')
		}
		else if (input == "yes" || input == "Yes") {
			alert("Right! good job.") break;
		}
	} while (input == "no" || input == "No" || input == null);
};
