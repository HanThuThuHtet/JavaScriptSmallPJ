console.log('h');


var getform = document.getElementById('form');

var gettextbox = document.getElementById('textbox');

var getul = document.getElementById('list-group');


getform.addEventListener('submit',function(e){

	//console.log('working');

	addnew();

	e.preventDefault(); //for no reload


});


function addnew(todo){


	var todotext = gettextbox.value; //without para
	//console.log(todotext);


	if(todo){ //with para from database
		todotext = todo.text; //overwirte form db text
	}

	if(todotext){ //if not blank or blank
		const li = document.createElement('li');

		console.log(todotext);
		console.log(todo.done);

		if(todo && todo.done){ //for done check
			li.classList.add('done'); //with todo para from local storage
		}




		//li.textContent = todotext; //OK
		li.appendChild(document.createTextNode(todotext));
		getul.appendChild(li);
		gettextbox.value = ""; //blank space after enter

		//console.log(li);

		updatelocalstorage();


		//listen li done or not
		//left cllick

		li.addEventListener('click',function(){

			li.classList.toggle('done');
			updatelocalstorage();
		});



		//right click > delete (contextmenu)
		li.addEventListener('contextmenu',function(){
			li.remove();
			updatelocalstorage();
		});



	}
}


function updatelocalstorage(){

	var getalllis = document.querySelectorAll('li');
	//console.log(getalllis);

	const todos =[]; //to store all li

	getalllis.forEach(function(getallli){
		//todos.push(getallli.textContent);
		todos.push({
			text:getallli.textContent,
			done:getallli.classList.contains('done') //add to cart item
		});
	});

	//console.log(todos);

	localStorage.setItem('todos',JSON.stringify(todos)); //??
							//key ,value
}



var getlstodos = JSON.parse(localStorage.getItem('todos'));
console.log(getlstodos);

if(getlstodos){

	getlstodos.forEach(function(getlstodo){
		//console.log(getlstodo);
		//console.log(getlstodo.text);
		addnew(getlstodo);
	});
}


