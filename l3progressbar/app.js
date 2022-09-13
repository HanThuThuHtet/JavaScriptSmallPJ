console.log('heello');


var getporgressbar = document.querySelector('.progress-bar');
var getdownloadbtn = document.querySelector('.download-btn');
var seturl = "https://linkedin.com";

getdownloadbtn.addEventListener('click',function(){
	// console.log('hi');

	getdownloadbtn.setAttribute("disabled",true); //for one btn click restriced

	var setwidth = 0;

	var setinv = setInterval(progressinc,100);

	function progressinc(){

		if(setwidth >= 100){
			clearInterval(setinv);
			setwidth = 0;
			window.location.href = seturl;
		}else{
			setwidth++;

			getporgressbar.style.width = `${setwidth}%`;

			getporgressbar.setAttribute('data-inc',`${setwidth}%`);
		}
	}

	




});