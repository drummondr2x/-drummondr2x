
function join(){
    console.log("Joined")
    alert("You have joined this group")
}

function like(id){
    console.log("liked")
    document.getElementById(id).innerHTML++;

}

function login(element){
    console.log("logged in ")
    element.remove();

}

function change(element){
    console.log("switched");
    console.log(element);
    element.src = "./assets/pic2.jpeg"

}

function changeBack(element){
    console.log("Switched Back");
    element.src = "./assets/prof-pic.jpeg";
}