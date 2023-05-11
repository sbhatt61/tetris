function setup(){
	canvas = document.getElementById('tcanvas');
	canvas.width = 550;
	canvas.height =550;
	ctx = canvas.getContext('2d');
	ctx.fillStyle = '#ffffff';
	ctx.clearRect(0,0,550,550);
	window.onkeydown = function(e){handleKeydown (e);}
	window.onkeyup = function(e){handleKeyup(e);}
	timer = setInterval(frame, 56);
}

function handleKeydown(e){
	var c = e.keyCode;
	c = String.fromCharCode(c);
}

function handleKeyup(e){
	var c = e.keyCode;
	c = String.fromCharCode(c);
}

function frame(){
	ctx.clearRect(0,0,550,550);
}