// var title = document.getElementById("title");
// title.addEventListener("click", function()  {  
//     debugger
// })

var options = ["rock","paper","scissors"];
var userChoice;
var CompChoice;

var choices = document.getElementsByClassName("choice");
console.log(choices);
for(var i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", function() {
        userChoice =this.id;
        // get the comp choice
        // display choices
        // figure out winner
        // button to go again
        // tally of wins, losses, and ties
        // resetting tally
    }); 
}