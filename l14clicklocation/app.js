console.log('h');

const getmap = document.querySelector('.map-container');
var getsmallcolor =document.getElementById('smallcolor'),
	getmediumcolor = document.getElementById('mediumcolor'),
	getlargecolor = document.getElementById('largecolor');

var circleidx = 0; //for circle click remove it


getmap.addEventListener('click',function(e){


	circleidx++;
	// console.log('w');

	// console.log(e.target);

	if(e.target.classList.contains('map-container')){


	const cx = e.clientX; //from window
	const cy = e.clientY;
	// console.log(cx,cy);


	const mapleft = e.target.offsetLeft;
	const maptop = e.target.offsetTop;
	// console.log(mapleft,maptop); //map img position

	//cxcy > mlmt

	const curx = cx - mapleft;
	const cury = cy - maptop;
	console.log(curx,cury);

	const circle = document.createElement('span');
	circle.id = circleidx;
	circle.classList.add('circle');
	//console.log(circle);

	circle.style.left = curx+'px';
	circle.style.top = `${cury}px`;



	//circle.style.backgroundColor = 'red';

	//adding to css as background: var(--small-color);
	// circle.style.setProperty('--small-color','darkblue');
	// circle.style.setProperty('--medium-color','pink');
	// circle.style.setProperty('--large-color','orange');

	//var getoption = document.querySelector;

	//console.log(getsmallcolor.selectedIndex);


	if(getsmallcolor.selectedIndex > 0 && getmediumcolor.selectedIndex > 0 && getlargecolor.selectedIndex > 0 ){
	circle.style.setProperty('--small-color',getsmallcolor.value);
	circle.style.setProperty('--medium-color',getmediumcolor.value);
	circle.style.setProperty('--large-color',getlargecolor.value);

	}




	e.target.appendChild(circle); //to add mor span circle to map container
	//this
}
	removepointer(e);


});

function removepointer(e){

	//console.log(e.target);
	//console.log(e.target.id);

	if(e.target.id > 0){

		e.target.remove();
	}

}