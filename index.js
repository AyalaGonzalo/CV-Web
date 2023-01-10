
const skill = document.querySelector('[data-button]')
const list = document.querySelector('[data-list]')


skill.addEventListener('click', (e) =>{
	
	
	console.log(this,e.target)
	listFun()

	
	
})



function listFun(){
	
	
	list.classList.toggle('displayed')
	list.classList.toggle('hidden')
}





/*
function recFun(){
	
	
	
	
	let width = 1;
	let interval = setInterval(frame,10)
	
	function frame(){
		
		
		if(width < 200){
			
			width++
			rectangle.style.width = width + 'px';
			
		}else{
			
			clearInterval(interval)
			
		}
		
		
		
	}
	
	
}

*/
