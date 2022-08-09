function adduser() {
player1_name = document.getElementById("player1_name_input").value
player2_name = document.getElementById("player2_name_input").value
player1_score = 0;
player2_score = 0;

document.getElementsById("player1_name").innerHTML = player1_name + " : ";
document.getElementsById("player2_name").innerHTML = player1_name + " : ";

document.getElementsById("player1_name").innerHTML = player1_name ;
document.getElementsById("player1_name").innerHTML = player1_name ;

document.getElementsById("player_question").innerHTML = player1_name = "Question Turn -"+ player1_name;
document.getElementsById("player_answer").innerHTML = player1_name = "Question Turn -"+ player1_name;
}

function send () {
get_word = document.getElementById("word").value;
word = getword.toLowerCase ();
console.log("word in lowerCase = " + word);

charAt1 = word.charAt(1)
console.log (charAt1)
length_divide_2 =Math.floor (word.lengt/2)
charAt2 = word.charAt(length_divide_2);
console.log(charAt2)
}