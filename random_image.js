//Random images
var number_of_im = 19 //highest num including 0
function randomise() { //triggered on page load
	var im1=Math.floor(Math.random() * number_of_im)
	var im2=Math.floor(Math.random() * number_of_im)
	var im3=Math.floor(Math.random() * number_of_im)
	while (im2 == im1) {
		var im2=Math.floor(Math.random() * number_of_im)
	}
	while ((im3 == im2) | (im1 == im3)) {
		var im3=Math.floor(Math.random() * number_of_im)
	}
	document.getElementById("gallery_im1").src = im1+".jpg";
	document.getElementById("gallery_im2").src = im2+".jpg";
	document.getElementById("gallery_im3").src = im3+".jpg";
}
