console.log("h");

var getinput = document.getElementById('search');
var getul = document.getElementById('members');
var getli = getul.getElementsByTagName('li');
// var getli = getul.querySelector('li');

console.log(getli); //html collection

var getsortazm1btn = document.getElementById('sortazm1');
var getsortzam1btn = document.getElementById('sortzam1');
var getsortazm2btn = document.getElementById('sortazm2');
var getsortzam2btn = document.getElementById('sortzam2');


getinput.addEventListener('keyup',filter);

getsortazm1btn.addEventListener('click', sortingazm1);
function sortingazm1() {
    // console.log('i am working');
    var lis = [];

    for (var i = 0; i < getli.length; i++) {
        // console.log(getli[i]);
        // console.log(getli[i].textContent);

        lis.push(getli[i].textContent);
    }
    // console.log(lis);
    // console.log(lis.sort());
    // console.log(lis.sort().reverse());

    var azlis = lis.sort();
    getul.innerHTML = "";
    azlis.forEach(function(azlis){
    	//console.log(azlis);

    	const newli = document.createElement('li');
    	const newlink = document.createElement('a');
    	newlink.herf = 'javascript:void(0);';
    	newlink.appendChild(document.createTextNode(azlis));
    	newli.appendChild(newlink);
    	//console.log(newli);
    	getul.appendChild(newli);
    });

}



    //ZAM1

    getsortzam1btn.addEventListener('click', sortingzam1);
	function sortingzam1() {
	    // console.log('i am working');
	    var lis = [];

	    for (var i = 0; i < getli.length; i++) {
	        // console.log(getli[i]);
	        // console.log(getli[i].textContent);

	        lis.push(getli[i].textContent);
	    }
	    // console.log(lis);
	    // console.log(lis.sort());
	    // console.log(lis.sort().reverse());

	    var zalis = lis.sort().reverse();
	    getul.innerHTML = ""; //clear
	    zalis.forEach(function(zalis){
	    	//console.log(zalis);

	    	const newli = document.createElement('li');
	    	const newlink = document.createElement('a');
	    	newlink.herf = 'javascript:void(0);';
	    	newlink.appendChild(document.createTextNode(zalis));
	    	newli.appendChild(newlink);
	    	//console.log(newli);
	    	getul.appendChild(newli);
	    });
}


	//AtoZM2
	getsortazm2btn.addEventListener('click', sortingazm2);

	function sortingazm2(){
		var shouldswitch = true;
		var switching = true;


		//for infinity loop
		do{

			switching = false; //for only one loop
			var i=0;

			for(i ; i < getli.length-1 ; i++){ //-1 for final index error


				shouldswitch = false;

				if(getli[i].textContent.toLowerCase() > getli[i+1].textContent.toLowerCase()){

					shouldswitch = true;
					break; // to catch curr i

				}

			}

			if(shouldswitch){

				//element.insertBefore(new,existing);//node.insertBefore(new,existing);
				//ul(parent),li(child)

				getli[i].parentElement.insertBefore(getli[i+1],getli[i]);

				switching = true;
			}

		}while(switching);
	}

	console.log(getli[0].textContent.toLowerCase()); //ag ag
	console.log(getli[1].textContent.toLowerCase()); //mg mg

	if(getli[0].textContent.toLowerCase() > getli[1].textContent.toLowerCase()){
		console.log('true');
	}else if(getli[0].textContent.toLowerCase() === getli[1].textContent.toLowerCase()){
		console.log('equal');
	}else{
		console.log('false'); //thisss
	}



	//End AZM2


	//ZAM2
	getsortzam2btn.addEventListener('click', sortingzam2);

	function sortingzam2(){
		var shouldswitch = true;
		var switching = true;


		//for infinity loop
		do{

			switching = false; //for only one loop
			var i=0;

			for(i ; i < getli.length-1 ; i++){ //-1 for final index error


				shouldswitch = false;

				if(getli[i].textContent.toLowerCase() < getli[i+1].textContent.toLowerCase()){

					shouldswitch = true;
					break; // to catch curr i

				}

			}

			if(shouldswitch){

				//element.insertBefore(new,existing);//node.insertBefore(new,existing);
				//ul(parent),li(child)

				getli[i].parentElement.insertBefore(getli[i+1],getli[i]);

				switching = true;
			}

		}while(switching);
	}

	console.log(getli[0].textContent.toLowerCase()); //ag ag
	console.log(getli[1].textContent.toLowerCase()); //mg mg

	if(getli[0].textContent.toLowerCase() > getli[1].textContent.toLowerCase()){
		console.log('true');
	}else if(getli[0].textContent.toLowerCase() === getli[1].textContent.toLowerCase()){
		console.log('equal');
	}else{
		console.log('false'); //thisss
	}



	//End AZM2








function filter(){
	//console.log(this.value);

	var inputfilter = this.value.toLowerCase();
	//console.log(inputfilter);

	for(var x =0 ; x < getli.length ; x++){
		//console.log(getli[x]); //li nae pya but want a 

		//console.log(getli[x].querySelector('a').textContent.toLowerCase());
		console.log(getli[x].getElementsByTagName('a')[0].innerText.toLowerCase());

		//var geta = getli[x].querySelector('a');

		var getavalue = getli[x].querySelector('a').textContent.toLowerCase();
        if (getavalue.indexOf(inputfilter) > -1) {
            getli[x].style.display = '';
        } else {
            getli[x].style.display = 'none';
        }



        










	}

}