
window.onload = function(){
	let indexsearchbar = document.getElementById("indexsearchbar");

	indexsearchbar.addEventListener("keyup", (e) => {
		if (e.key === "Enter") {
			searchHome();
		}
	});

}
