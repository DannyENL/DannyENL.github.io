//Random images
var images=["1_thumb.jpg","2_thumb.jpg","3_thumb.jpg","4_thumb.jpg","5_thumb.jpg","6_thumb.jpg","7_thumb.jpg"];
messages.sort()
function randomise() { //triggered on page load
	var im1=Math.floor(Math.random() * images.length)
	var im2=Math.floor(Math.random() * images.length)
	var im3=Math.floor(Math.random() * images.length)
	while (im2 == im1) {
		var im2=Math.floor(Math.random() * images.length)
	}
	while ((im3 == im2) | (im1 == im3)) {
		var im3=Math.floor(Math.random() * images.length)
	}
	document.getElementById("gallery_im1").src = images[im1];
	document.getElementById("gallery_im2").src = images[im2];
	document.getElementById("gallery_im3").src = images[im3];
}
