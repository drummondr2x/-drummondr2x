console.log("page is loading...");

var cart = document.getElementById("changeAmount");
var ninja = document.querySelector(".large")

function switchGame() {
    console.log("This one")
    ninja.src = "Assets/pixel-ninjas-2.png";
}

function switchBack(element) {
    console.log("No. This one");
    document.querySelector('.large').src = "Assets/stonepunk.png";
    
}


function updateCart() {
    console.log(cart);
    cart.innerHTML++;
}
