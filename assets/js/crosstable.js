
window.onload = function() {
    activateListener("player1");
    activateListener("player2");
}

function run() {
	let player1  = document.getElementById("player1").value.toLowerCase();
    let player2  = document.getElementById("player2").value.toLowerCase();
	let player1c = document.getElementById("player1").value;
    let player2c = document.getElementById("player2").value;
    let url = `https://lichess.org/api/crosstable/${player1}/${player2}`;

    // for status shit

    let a = `https://lichess.org/api/user/${player1}`;
    let b = `https://lichess.org/api/user/${player2}`;

    fetch(url)
    	.then(response => response.json())
    	.then(data => {
            document.getElementById("player1name").innerText = player1c + ":";
            document.getElementById("player2name").innerText = player2c + ":";
            document.getElementById("totalgames").innerText = data.nbGames + " Games";

            document.getElementById("player1wins").innerText = `${data.users[player1]} Wins`;
            document.getElementById("player2wins").innerText = `${data.users[player2]} Wins`;
            getPlayer1Status();
            getPlayer2Status();
    });
}

function activateListener(id) {
    const element = document.getElementById(id);
    element.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            run();
        }
    });
}

function getPlayer1Status() {
	let player  = document.getElementById("player1").value.toLowerCase();
    let url = `https://lichess.org/api/user/${player}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.online) {
                document.getElementById("player1name").innerText = data.username + "  🟢";
            } else {
                document.getElementById("player1name").innerText = data.username + "  🔴";
            }
			if (data.tosViolation) {
				document.getElementById("player1name").innerText += "  🚫";
            }
        });
}

function getPlayer2Status() {
    let player  = document.getElementById("player2").value.toLowerCase();
    let url = `https://lichess.org/api/user/${player}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.online) {
                document.getElementById("player2name").innerText = data.username + "  🟢";
            } else {
                document.getElementById("player2name").innerText = data.username + "  🔴";
            }
			if (data.tosViolation) {
				document.getElementById("player2name").innerText += "  🚫";
            }
        });
}