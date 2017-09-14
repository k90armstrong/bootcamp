var box = document.getElementById('box');

document.getElementById("button1").onclick = function() {
	box.style.height = "500px";
	box.style.width = "500px";
};

document.getElementById("button2").onclick = function() {
	box.style.backgroundColor = "blue";
};

document.getElementById("button3").onclick = function() {
	box.style.opacity = "0.5";
};

document.getElementById("button4").onclick = function() {
	box.style.height = "150px";
	box.style.width = "150px";
	box.style.backgroundColor = "orange";
	box.style.transform = "rotate(0deg)";
	box.style.opacity = "1";
	box.style.borderRadius = "0px";
};

document.getElementById("button5").onclick = function() {
	box.style.transform = "rotate(20deg)";
};

document.getElementById("button6").onclick = function() {
	box.style.borderRadius = "30px";
};

document.getElementById("button7").onclick = function() {
	box.style.height = "30px";
	box.style.width = "30px";
};

document.getElementById("button8").onclick = function() {
	var trans = box.style.transform;
	if ('translateX' of trans) {
		trans = trans.replace('translateX(', '');
		trans = trans.replace('px)', '');
		var right = parseInt(trans);
		var newRight = right + 50;
		var temp = "translateX(" + newRight + "px)";
		box.style.transform = temp;
	}
	else {
		box.style.transform = "translateX(50px)";
	}
};