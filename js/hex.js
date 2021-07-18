const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
let hexColor = '#'; //const would result in error
for (let i = 0; i<6; i++){
	const randomNumber = getRandomNumber()
	hexColor+= hex[randomNumber]
}
color.textContent = hexColor;
document.body.style.background = hexColor;
});

function getRandomNumber(){
//generates a number between 0 and (hex length-1)
return Math.floor(Math.random() * hex.length) 
};
