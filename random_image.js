//Sets the three random images at the bottom of Home and Gallery
var number_of_im=19 //Highest numbered file
function randomise() { //Triggered on page load
	var im1=Math.floor(Math.random()*number_of_im) //Picks a random number for the first image
	var im2=Math.floor(Math.random()*number_of_im) //Picks a random number for the second image
	var im3=Math.floor(Math.random()*number_of_im) //Picks a random number for the third image
	while (im2==im1) { //While the first two images are identical, keep selecting a new second image
		var im2=Math.floor(Math.random()*number_of_im)
	}
	while ((im3==im2) | (im1==im3)) { //While the third image isn't unique, keep selecting a new third image
		var im3=Math.floor(Math.random()*number_of_im)
	}
	document.getElementById("gallery_im1").src="images/"+im1+".jpg"; //Set the source for the first image element
	document.getElementById("gallery_im2").src="images/"+im2+".jpg"; //Set the source for the second image element
	document.getElementById("gallery_im3").src="images/"+im3+".jpg"; //Set the source for the third image element
}
