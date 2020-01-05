var myToDoList = document.getElementsByTagName("LI");

var i;

for (i = 0; i < myToDoList.length; i++) {

  var span = document.createElement("SPAN");

  var txt = document.createTextNode("\u00D7");

  span.className = "close";

  span.appendChild(txt);

  myToDoList[i].appendChild(span);

}



var close = document.getElementsByClassName("close");

var i;

for (i = 0; i < close.length; i++) {

  close[i].onclick = function() {

    var div = this.parentElement;

    div.style.display = "none";

  }

}

const check = function () {
	const idk = document.getElementsByClassName('SPAN');


	do {
		var input = prompt('Message: ')
		if (input.length > 50) {
			alert('Your message is too long. Keep it under 50 characters')
		}
	} while (input.length > 50)

	ctx.font = '48px sans-serif';
	ctx.strokeText(input, 30, 70, 994);
};


function newElement() {

  var li = document.createElement("li");

  var value = document.getElementById("myInput").value;

  var t = document.createTextNode(value);

  li.appendChild(t);

  if (value === '') {

    alert("You must write something!");

  } else {

    document.getElementById("myUL").appendChild(li);

  }

  document.getElementById("myInput").value = "";



  var span = document.createElement("SPAN");

  var txt = document.createTextNode("\u00D7");

  span.className = "close";

  span.appendChild(txt);

  li.appendChild(span);



  for (i = 0; i < close.length; i++) {

    close[i].onclick = function() {

      var div = this.parentElement;

      div.style.display = "none";

    }

  }

}
