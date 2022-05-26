
function run() {
	var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    correctNames();
    let url = `https://lichess.org/api/crosstable/${player1}/${player2}`;

	console.log(player1);
    console.log(player2);
	console.log(url);

    fetch(url)
    	.then(response => response.json())
    	.then(data => {
            document.getElementById("player1name").innerText = player1 + ":";
            document.getElementById("player2name").innerText = player2 + ":";
            document.getElementById("totalgames").innerText = data.nbGames + " Games";

            document.getElementById("player1wins").innerText = `${data.users[player1]} Wins`;
            document.getElementById("player2wins").innerText = `${data.users[player2]} Wins`;
    });
}

function correctNames() {
    let url = `https://lichess.org/api/user/${player1}`;

    fetch(url)
    	.then(response => response.json())
    	.then(data => {
            player1 = data.username;
    });

    url = `https://lichess.org/api/user/${player2}`;

    fetch(url)
    	.then(response => response.json())
    	.then(data => {
            player2 = data.username;
    });
}