console.log("h");

const database =[

	{
		question:"Choose Traffic Ligth?",
		a:"./img/traffic.jpg",
		b:"./img/mountain.jpg",
		c:"./img/ambulance.jpg",
		d:"./img/airport.jpg",
		correctanswer:"a"
	},


	{
		question:"Choose Mountain?",
		a:"./img/ambulance.jpg",
		b:"./img/mountain.jpg",
		c:"./img/traffic.jpg",
		d:"./img/airport.jpg",
		correctanswer:"b"
	},


	{
		question:"Choose Ambulance Truck?",
		a:"./img/ambulance.jpg",
		b:"./img/mountain.jpg",
		c:"./img/traffic.jpg",
		d:"./img/airport.jpg",
		correctanswer:"a"
	},


	{
		question:"Choose Airport?",
		a:"./img/traffic.jpg",
		b:"./img/mountain.jpg",
		c:"./img/ambulance.jpg",
		d:"./img/airport.jpg",
		correctanswer:"d"
	}



];

console.log(database[0]);

const getcontainer = document.querySelector('.container');
const getquestion = document.querySelector('.question');

const getanswers = document.querySelectorAll('.answer');

console.log(getanswers); //NodeList input box

const geta_img = document.getElementById('a_img');
const getb_img = document.getElementById('b_img');
const getc_img = document.getElementById('c_img');
const getd_img = document.getElementById('d_img');

const getbtn = document.querySelector('.btn');

console.log(geta_img);



let currentidx = 0 ;
let score = 0;


startquestion();

function startquestion(){

	removeselects();

	const currentqes = database[currentidx];

	//console.log(currentqes);

	getquestion.textContent = currentqes.question;
	
	geta_img.src = currentqes.a;
	getb_img.src = currentqes.b;
	getc_img.src = currentqes.c;
	getd_img.src = currentqes.d;


	// geta_img.src = database[0].a;
	// getb_img.src = database[0].b;
	// getc_img.src = database[0].c;
	// getd_img.src = database[0].d;




}


function getsingleanswer(){

	let answer;
	//console.log(answer); //undefined

	//console.log(getanswers); //nodelist

	getanswers.forEach(function(getanswer){

		//console.log(getanswers);

		if(getanswer.checked){

			//console.log(getanswer.id);
			answer = getanswer.id;
		}
	});

	//console.log(answer); //for 1

	return answer;

}

//getsingleanswer();

getbtn.addEventListener('click',function(){


	//console.log('w');

	const answer = getsingleanswer();

	//console.log(answer);

	if(answer){
		//console.log(answer);



		if(answer === database[currentidx].correctanswer){
			score++;
		}



		currentidx++;
		//console.log(currentidx);

		if(currentidx < database.length){
			
			startquestion();

		}else{
			// console.log(score);

			getcontainer.innerHTML = `

				<h3>Total Score : ${score*25}</h3>
				<h4>Your answered correctly at ${score}/${database.length} questions.
				<!--<button type="button" class="btn" ondblclick="location.reload()">Click to Reload</button>-->
				<button type="button" class="btn" onclick="doubleclick()">Click to Reload</button>

			`;
		}




	}else{
		window.alert('Choose one answer');
	}



});


function removeselects(){
	getanswers.forEach(function(getanswer){
		return getanswer.checked = false;
	});
}


let clicktimes = 0;

function doubleclick(){
	//console.log('h');

	if(clicktimes === 0){

		// clicktimes = new Date().getTime();
		clicktimes = Date.now();
		//console.log(clicktimes);  //new Date().getTime() === Date.now()
	}else{

		if( (new Date().getTime() - clicktimes) < 800 ){
			//console.log('reload');

			location.reload();


			clicktimes = 0;
		}
		else{
			clicktimes = new Date().getTime(); //reclick => start 1st click
		}
	}

}

// doubleclick between 1s => reload