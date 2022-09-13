console.log("h");


var slides = document.getElementsByClassName("carousel-item");
console.log(slides); // html collection
var dots = document.querySelectorAll(".dot");
console.log(dots); //node list

var currslide = 1;


//Previous btn
document.getElementById('prev').addEventListener('click',function(){
	carousel(currslide -= 1);
});


//Next btn
document.getElementById('next').addEventListener('click',function(){
	carousel(currslide += 1);
});

// carousel(currslide);


for(var q=0 ; q < dots.length ; q++){
	// console.log(q);

	dots[q].addEventListener('click',function(){
		// console.log(this.getAttribute("data-bs-slide-to"));
		currslide = this.getAttribute("data-bs-slide-to");
		carousel(currslide);
	});
}


carousel(currslide);

function carousel(slidesnum){



	var x,y;
	//hide all slides
	for(x=0 ; x < slides.length ; x++){
		slides[x].style.display = "none";
	}

	for(y=0 ; y < dots.length ; y++){
		// dots[y].classList.remove("active");

		// dots[y].className("dot");

		dots[y].className = dots[y].className.replace("active"," ");
	}


	//res for currslide 1 to 3 & 3 to 1(4 -> 1) (0 -> 4)
	if(slidesnum > slides.length){
		currslide = 1;
	}else if(slidesnum < 1){
		currslide = slides.length;
	}


	console.log(currslide);

	slides[currslide-1].style.display = "block";


	dots[currslide-1].className ="dot active";
	dots[currslide-1].className += " active"; //space is important
	// dots[currslide-1].classList.add("active");
}


//slides 		 0 	 	 1 	 	 2

//currslide 	1-1 	2-1 	3-1