console.log('h');


var gettablinks = document.getElementsByClassName('tablinks'); //html collection
var gettabpanes = document.getElementsByClassName('tab-pane'); //html collection
//console.log(gettabpanes); 

var getbtnclose = document.querySelectorAll('.btn-close'); //node list


//for each loop //html collection to array for each looping
var tabpanes = Array.from(gettabpanes);

function gettab(evn,linkid){

	//hide all first
	tabpanes.forEach(function(tabpane){
		tabpane.style.display = "none";
	});

	document.getElementById(linkid).style.display = "block";



	//clear all activee

	for(var x=0 ; x < gettablinks.length ; x++){
		gettablinks[x].className = gettablinks[x].className.replace(" active","");

		//close // x = for 1 btn close
		getbtnclose[x].addEventListener('click',function(){
			this.parentElement.style.display = "none";
		})
	}

	evn.currentTarget.className += " active";

	// evn.target.className += " active";
	//evn.target.className = evn.target.className.replace("tablinks","tabliks active");
	//evn.target.classList.add("active");


	//console.log(evn.currentTarget);





}

//add autoclick id on 'home' tab
document.getElementById("autoclick").click();


