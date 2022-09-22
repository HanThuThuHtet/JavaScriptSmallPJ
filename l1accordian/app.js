// console.log("hello");
var getacctitles = document.getElementsByClassName("acctitle");
// consol.log(getacctitles); html collection
var getacccontents = document.querySelectorAll(".acccontent");
// console.log(getacccontents); node list


for(var x = 0 ; x < getacctitles.length ; x++){
	// console.log(x);

	getacctitles[x].addEventListener('click',function(e){
		// console.log(e.target);

		// console.log(this);

		this.classList.toggle("active");
		var getcontent = this.nextElementSibling;
		// console.log(getcontent);

		if(getcontent.style.height){

			getcontent.style.height = null; //beware cant be set 0
		}
		else{
			// console.log(getcontent.scrollHeight);
			getcontent.style.height = getcontent.scrollHeight + "px";
		}



	});

	//getacctitles[0].style.height = getacccontents[0].scrollHeight+"px";

		if(getacctitles[x].classList.contains("active")){
			getacccontents[x].style.height = getacccontents[x].scrollHeight+"px";
		}
}