
const skill = document.querySelector('[data-button]');
const list = document.querySelector('[data-list]')


skill.addEventListener('click', () =>{
	
	
	console.log('you click me');
	list.style.display = 'block';
	skill.classList.remove('skill-h3')
	skill.removeAttribute('data-button')
	
})