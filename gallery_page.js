//Used on the Gallery page to expand images when clicked on
function gallery_im_enlarge() { //Triggered on page load
	var list_of_ims = document.getElementsByName("gallery_im"); //Finds all the gallery thumbnail images
	for (var i = 0; i < list_of_ims.length; i++) {
		list_of_ims[i].addEventListener("click", function(){enable_overlay()}); //Adds an event listener. When the image is clicked it'll trigger enable_overlay
	}

	function enable_overlay() { //Triggered when an image is clicked
		document.getElementById("big_photo").src=event.target.src; //Sets the big photo source to be the chosen image
		document.getElementById("big_photo").style.display="inline"; //Display is visible
		document.getElementById("overlay").style.display="inline"; //Display is visible
		document.getElementById("overlay").addEventListener("click", disable_overlay); //Adds event listener to overlay - when clicked, trigger disable_overlay
		document.getElementById("big_photo").addEventListener("click", disable_overlay); //Adds event listener to overlay - when clicked, trigger disable_overlay
		
	}

	function disable_overlay() { //Triggered when the overlay is clicked
		document.getElementById("overlay").style.display="none"; //Hides the overlay background
		document.getElementById("big_photo").style.display="none"; //Hides the image
	}
}
