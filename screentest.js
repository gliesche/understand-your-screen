(function(){
	"use strict";

	var sizes = document.getElementsByClassName("value"),
			i;

	function writeValues() {
		for(i = 0; i < sizes.length; i+=1) {
			sizes[i].innerHTML = eval(sizes[i].getAttribute("data-value"));
		}
	}

	window.onresize = window.onorientationchange = writeValues;

	writeValues();

}());
