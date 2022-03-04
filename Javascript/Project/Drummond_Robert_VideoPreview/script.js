console.log("page loaded...");

var jelly = document.getElementById("jelly");

function startVid (jelly) {
    jelly.play();
    jelly.muted = true;
}

function stopVid (jelly) {
    jelly.pause();
}