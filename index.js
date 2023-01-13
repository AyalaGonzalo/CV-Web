
const skill = document.querySelector('[data-button]')
const list = document.querySelector('[data-list]')


skill.addEventListener('click', () =>{
	
	

	listFun()

	
	
})



function listFun(){
	
	
	list.classList.toggle('displayed')
	list.classList.toggle('hidden')
}


