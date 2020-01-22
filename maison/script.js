var menu =document.querySelector('.menu')
var btn =document.querySelector('.icon')
var comble =document.querySelector('.comble')

comble.style.display = "none"


var add=function(){

	comble.style.display = "block"
	menu.classList.toggle('active')
}
var remove=function(){

	comble.style.display = "none"
	menu.classList.toggle('active')
}

btn.addEventListener('click', add)
comble.addEventListener('click', remove)