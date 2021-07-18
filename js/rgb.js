const btn = document.getElementById("btn");
const color = document.querySelector(".color");
//rgb(r, g, b) 0-255

btn.addEventListener("click", function(){
	const r = getRandomNumber()
	const g = getRandomNumber()
	const b = getRandomNumber()
	rgbColor = ('rgb('+ r + ',' + g +',' + b + ')')
	color.textContent = rgbColor;
	document.body.style.background = rgbColor;
	});


function getRandomNumber(){
//generates a number between 0 and 255
return Math.floor(Math.random() * 256) 
};
