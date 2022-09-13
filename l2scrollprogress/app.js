// console.log("hello");

var getprogressbar = document.getElementById('porgress-bar');

window.onscroll = function(){ //anonymous function
	scrollpoint();
}

function scrollpoint(){

	// console.log('working');

	// scrolltop*100 / (porjectHeight - clientHeight) JQuery

	var getscrolltop = document.documentElement.scrollTop;
	// console.log(getscrolltop);

	var getscrollheight = document.documentElement.scrollHeight;
	// console.log(getscrollheight);

	var getclientheight = document.documentElement.clientHeight;
	// console.log(getclientheight);

	var calcheight = getscrollheight - getclientheight;
	// console.log(calcheight);

	var getfinal = Math.round((getscrolltop / calcheight) * 100);
	console.log(getfinal);


	
	// progressbar.style.width = `${getfinal}%`;

	getprogressbar.style.width = getfinal + "%";

	


}


// scrollpoint();


function printme(){
	window.print();
}




// var getprogressbar = document.getElementById('progress-bar');

// window.onscroll = function(){
// 	scrollpoint();
// };

// function scrollpoint(){
// 	// console.log('i am working');


// 	// scrolltop
// 	// project height
// 	// current height

// 	// project height - current height

// 	// scrolltop * 100 / (project height - current height)


// 	var getscrolltop = document.documentElement.scrollTop;
// 	// console.log(getscrolltop);

// 	var getscrollheight = document.documentElement.scrollHeight;
// 	// console.log(getscrollheight);

// 	var getclientheight = document.documentElement.clientHeight;
// 	// console.log(getclientheight);

// 	var calcheight = getscrollheight - getclientheight;

// 	// var getfinal = Math.round((getscrolltop * 100) / calcheight);
// 	// console.log(getfinal);

// 	var getfinal = Math.round((getscrolltop/calcheight) * 100);
// 	// console.log(getfinal);

// 	getprogressbar.style.width = `${getfinal}%`;
// }
