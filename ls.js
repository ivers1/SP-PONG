

function playerName() {
    let player = document.getElementById("playerOne").value;
    localStorage.setItem("textvalue", player);
    return false;
}

function highscore(){
    if(window.localStorage.getItem("highscore")!= null){
        document.getElementById("highscore");
    }
}

document.getElementById("result").innerHTML=localStorage.getItem("textvalue");
document.getElementById("highscore").innerHTML=localStorage.getItem("highscore");



