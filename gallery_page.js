function gallery_im_enlarge() {
	var list_of_ims = document.getElementsByName("gallery_im");
	for (var i = 0; i < list_of_ims.length; i++) {
		list_of_ims[i].addEventListener("click", function(){enable_overlay()});
	}

	function enable_overlay() {
		document.getElementById("big_photo").src=event.target.src;
		document.getElementById("overlay").style.height="100%";
		document.getElementById("overlay").style.width="100%";
		document.getElementById("overlay").addEventListener("click", disable_overlay);
		document.getElementById("big_photo").addEventListener("click", disable_overlay);
		
	}

	function disable_overlay() {
		document.getElementById("overlay").style.width="0%";
		document.getElementById("overlay").style.height="0%";
		document.getElementById("big_photo").src="";
	}
}
