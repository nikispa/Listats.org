
window.onload = function(){
	let indexsearchbar = document.getElementById("indexsearchbar");

	console.log("Searchbar is: " + indexsearchbar);
	
	indexsearchbar.addEventListener("keyup", (e) => {
		if (e.key === "Enter") {
			searchHome();
		}
	});

}
