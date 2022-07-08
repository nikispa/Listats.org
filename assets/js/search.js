
window.onload = function() {
    if (sessionStorage.getItem("name") != null) {
        document.getElementById("searchbar").value = sessionStorage.getItem("name");
        search();
        sessionStorage.clear();
    }
	activateListener("indexsearchbar");
	activateListener("searchbar");
}

function search() {
	let username = document.getElementById("searchbar").value;
    let url = `https://lichess.org/api/user/${username}`;

    fetch(url)
    	.then(response => response.json())
    	.then(data => {
            if (data.online) {
                document.getElementById("username").innerText = data.username + "  🟢";
            } else {
                document.getElementById("username").innerText = data.username + "  🔴";
            }
			if (data.tosViolation) {
				document.getElementById("username").innerText += "  🚫";
			}
        	document.getElementById("created_at").innerText = new Date(data.createdAt).toLocaleDateString();
        	document.getElementById("last_seen").innerText = new Date(data.seenAt).toLocaleDateString();
        	document.getElementById("playtime").innerText = Math.round(data.playTime.total/60/60) + "h";
        	document.getElementById("wins").innerText = data.count.win;
        	document.getElementById("losses").innerText = data.count.loss;
        	document.getElementById("draws").innerText = data.count.draw;
        	document.getElementById("blitz_games").innerText = data.perfs.blitz.games;
        	document.getElementById("blitz_rating").innerText = data.perfs.blitz.rating;
			if (data.perfs.blitz.games < 30) {
        		document.getElementById("blitz_rating").innerText += "?";
			}
        	document.getElementById("bullet_games").innerText = data.perfs.bullet.games;
        	document.getElementById("bullet_rating").innerText = data.perfs.bullet.rating;
			if (data.perfs.bullet.games < 10) {
        		document.getElementById("bullet_rating").innerText += "?";
			}
        	document.getElementById("puzzle_games").innerText = "0";
        	document.getElementById("rapid_games").innerText = data.perfs.rapid.games;
        	document.getElementById("rapid_rating").innerText = data.perfs.rapid.rating;
			if (data.perfs.rapid.games < 30) {
        		document.getElementById("rapid_rating").innerText += "?";
			}
        	document.getElementById("puzzle_games").innerText = "0";
        	document.getElementById("puzzle_rating").innerText = "0";
        	document.getElementById("puzzle_games").innerText = data.perfs.puzzle.games;
        	document.getElementById("puzzle_rating").innerText = data.perfs.puzzle.rating;
            document.getElementById("searchbar").value = "";
    });
}

function searchHome() {
    let name = document.getElementById("indexsearchbar").value;
	sessionStorage.setItem("name", name);
    location.replace("search.html");
}

function activateListener(id) {
	try {
		const element = document.getElementById(id);
		element.addEventListener("keyup", (e) => {
			if (id == "searchbar") {
				if (e.key === "Enter") {
					search();
				}
			} else {
				if (e.key === "Enter") {
					searchHome();
				}
			}
		});
	} catch (error) {
	}
}