const subheader=document.querySelector(".sub-header");
const collapsabletoogle=document.querySelector(".collapsable-menu");
const links=document.querySelectorAll(".link");

function removelinks(){
	for (var i =0; i <links.length ; i++) {
		links[i].addEventListener('click',()=>{
			subheader.classList.toggle('active');
			collapsabletoogle.classList.toggle('active');
		});
	}
}

collapsabletoogle.addEventListener('click',(e)=>{
	collapsabletoogle.classList.toggle('active');
	subheader.classList.toggle('active');
});

window.addEventListener('scroll',()=>{
	const scroll=document.documentElement.scrollTop;

	if (scroll>0) 
	{
		subheader.classList.add('fixed');
	}else{
		subheader.classList.remove('fixed');
	}
});
removelinks();

