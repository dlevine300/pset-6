window.onload = function() {
    document.getElementById("poppin").onclick = wassPoppin;
}

const wassPoppin = function () {

	do {
		var input = (prompt("Hey elites, nico is gay. Yes or No? "))
		if (input == null) {
			alert("you didn't say yes. So try again")
		}
		if (input == "no" || input == "No") {
			alert('Wrong, try again.')
		}
		if (input == "yes" || input == "Yes") {
			alert("Right! good job.")
		}
	} while (input == "no" || input == "No" || input == null || input != "yes" || input !="Yes"|| input !=="no" || input !=="No");
};
