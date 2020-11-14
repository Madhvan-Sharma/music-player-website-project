function modal() {
var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
	$("input[type$='email']").val('');
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}

function modalError() {

var modal = document.getElementById('myError');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close_error")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
	$("input[type$='email']").val('');
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}

function hideText() {
	var x = document.getElementById("about-text");
		if (x.className === "hide") {
			$('.hide').hide().fadeIn(750);
			x.className += "show";
		} else {
			x.className = "hide";
			$('.hide').show().fadeOut(750);
		}
}