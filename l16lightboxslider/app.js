console.log('h');

var getimgs = document.querySelectorAll('.img');//nodelist

var getbtnclose = document.querySelector('.btn-close');
var getmodal = document.querySelector('.modal');

var getviews = document.getElementsByClassName('view');
console.log(getviews); //html collection

var getcounter = document.querySelector('.counter');
var getcaption = document.querySelector('.caption');

var getpervbtn = document.querySelector('.prev');
var getnextbtn = document.querySelector('.next');

var getnoactives = document.getElementsByClassName('noactive');
//console.log(getnoactives);//html collection


for(var i=0; i < getimgs.length; i++){
	console.log(getimgs[i]);

	getimgs[i].addEventListener('click',showmodal);
}

function showmodal(){

	getmodal.style.display = "block";
}



getbtnclose.addEventListener('click',function(){

	getmodal.style.display = "none";

});



//close modal 
document.addEventListener('click',function(e){

	//console.log(e.target); //modal

	if(e.target === getmodal){
		getmodal.style.display = "none";
	}

});


// getbtnclose.onclick = function(){
// 	getmodal.style.display = "none";
// }




