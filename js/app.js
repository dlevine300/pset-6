window.onload = function() {
    document.getElementById("poppin").onclick = wassPoppin;
    document.getElementById("1").onclick = list
  }
const wassPoppin = function() {
  let input = prompt('Hey elites, Nico is gay. Yes or No?:')
  if (input === null) {
    window.alert("u didn't say Yes so ur bad.")
  }
  if (input == 'no') {
    window.alert('wrong')
  } else if (input == 'yes') {
    window.alert('right')
  }
};
