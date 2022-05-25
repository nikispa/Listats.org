window.onload = function() {
    var context = document.getElementById("canvas").getContext("2d");
    const interval = setInterval(refresh, 5000);
};

function refresh() {
    let image = new Image();
    image.src = "https://lichess.org/tv/frame?theme=blue&bg=dark";
    console.log("refresgubng");
    image.onload=function() {
        console.log("drawing");
        context.drawImage(image,0,0);
        console.log("done");
    };
    console.log("refreshed");
}