console.log('h');

const getemail = document.getElementById('emails');
const gettextarea = document.querySelector('textarea');
const getbtn = document.querySelector('.btn');
const getemcontainer = document.querySelector('.email-container');

getemail.focus();



// key Up listen

getemail.addEventListener('keyup',function(e){
	createemaillist(e.target.value); //input value
	// createemaillist(this.value);
});

function createemaillist(inputtext){
	//console.log(inputtext);//string

	//remove empty,empty with space
	//split by ,
	// const eitems = inputtext.split(",").filter(removeempty=>removeempty.trim() !== '');


	// console.log(eitems); //array


	//remove space/empty and also remove space from text fornt/back 
	const eitems = inputtext.split(',').filter(removeempty=>removeempty.trim() !== '').map(removeempty=>removeempty.trim());
	//The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. 

	console.log(eitems); //array

	//remove HTML
	getemcontainer.innerHTML=''; //to get last result


	//append span tag child to email container
	eitems.forEach(function(eitems){
		console.log(eitems);

		const setnewspan = document.createElement('span');
		setnewspan.textContent = eitems;
		setnewspan.classList.add('email-item');

		//console.log(setnewspan);

		getemcontainer.appendChild(setnewspan);
		

	});


}


getbtn.addEventListener('click',function(e){

	sendemail();
	e.preventDefault();
});

function sendemail(){


	//console.log('working');

	const gettextvalue = gettextarea.value;
	const getaddresses = document.querySelectorAll('.email-item');
	//console.log(gettextvalue);
	//console.log(getaddress);

	var persons = [];
	// getaddresses.forEach(function(getaddress){
	// 	persons.push({
	// 		email:getaddress.textContent,
	// 		message:gettextvalue
	// 	});
	// 	console.log(persons);
	// });

	if(getaddresses.length > 0 && gettextvalue){
		getaddresses.forEach(function(getaddress){
			persons.push({
				email:getaddress.textContent,
				message:gettextvalue
			});
		});
		console.log(persons);
	}else{
		window.alert('Enter both email address and message');
		gettextarea.focus();
	}

}



