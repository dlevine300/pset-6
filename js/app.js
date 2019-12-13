window.onload = function() {
    document.getElementById("poppin").onclick = wassPoppin;
}
const wassPoppin= function() {
  let input = prompt('Hey elites, Nico is gay. Yes or No?:')
do {
  if (input === null) {
    window.alert("u didn't say Yes so ur bad.")
  }
  if (input == 'no') {
      window.alert('wrong, try again')
  } else if (input == 'yes') {
    window.alert('right')
  }
} while (input === null || imput === 'no')
};
