// array to store btn IDs
var arr = ['0', '1', '2'];
// no of lives
var lives = 3;
// initial score
var score = 0;

// func to generate a new question
function newQuestion() {
    // making random rgb numbers
    var r = Math.floor((Math.random()) * 256);
    var g = Math.floor((Math.random()) * 256);
    var b = Math.floor((Math.random()) * 256);
    //displaying those rgb numbers
    document.getElementById("ColorName").innerHTML = "( " + r + ", " + g + "," + b + ")";
    
    // selecting a random index from array
    var index = Math.floor((Math.random()) * 3);
    // setting the bg color of selected button to the rgb number
    document.getElementById(index).style.backgroundColor = "rgb( " + r + ", " + g + "," + b + ")";
    arr.splice(index, 1); // the selected button removed from array
    
    // making random rgb numbers 
    var r1 = Math.floor((Math.random()) * 256);
    var g1 = Math.floor((Math.random()) * 256);
    var b1 = Math.floor((Math.random()) * 256);
    document.getElementById(arr[0]).style.backgroundColor = "rgb( " + r1 + ", " + g1 + "," + b1 + ")";
    
    var r2 = Math.floor((Math.random()) * 256);
    var g2 = Math.floor((Math.random()) * 256);
    var b2 = Math.floor((Math.random()) * 256);
    document.getElementById(arr[1]).style.backgroundColor = "rgb( " + r2 + ", " + g2 + "," + b2 + ")";
    
    return index;
}
// calling the new question func to set up initial question
var index = newQuestion();
// func for handling user guesses
function guess() {
    //checking if the clicked button id matches the index
    if (event.target.id == index) {
        // to increase score and showing message
        score++;
        document.getElementById("ColorName").innerHTML = "CORRECT :) !";
        document.getElementById("ColorName").style.color = "green";
    } else {
        // to deecrease the live 
        lives--;
        document.getElementById("lives").innerHTML = "Lives: " + lives;
        document.getElementById("ColorName").innerHTML = "WRONG :( !";
        document.getElementById("ColorName").style.color = "red";
    }

    if (lives === 0) {
        // checking if the game is over and showing final score and disabling btn clicks
        document.getElementById("ColorName").innerHTML = "Game Over! Final Score: " + score;
        document.getElementsByClassName("btn")[0].removeAttribute("onclick");
        document.getElementsByClassName("btn")[1].removeAttribute("onclick");
        document.getElementsByClassName("btn")[2].removeAttribute("onclick");
    } else {
        // for a new question
        index = newQuestion();
        
    }
}
// to rplay and reload page
function replay() {
    window.location.reload();
}