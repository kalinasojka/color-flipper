const colors = ['green', 'red', 'AliceBlue', 'AntiqueWhite','Aqua', 'Aquamarine', 'Azure', 'Beige'];


const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
//get random number between 0 - length of my array
const randomNumber = getRandomNumber();
document.body.style.background = colors[randomNumber];
color.textContent = colors[randomNumber]
});

function getRandomNumber() {
	 //Math.random() returns a random number between 0-1
	 //Math.random() * colors.length returns a number between 0,x and 3,x
	 //Math.floor rounds my number down resulting in a number between 0 and 3
	return Math.floor(Math.random() * colors.length);
}