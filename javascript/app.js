const container = document.querySelector('.container');
const btn 		= document.querySelector('#dropButton');
const links     = document.querySelectorAll('.sitelinks a');
const dropdown  = document.querySelector('.dropdown');

var hidden = true;
btn.addEventListener('click', function(){
	if(hidden){
		dropdown.classList.add('show');
		hidden = false;
	}
	else{
		dropdown.classList.remove('show');
		hidden = true;
	}
});




