var p1, p2,qturn,aturn;

p1 =   localStorage.getItem("player1");
 p2 =   localStorage.getItem("player2");

 var p1_score = 0;
var p2_score = 0;

document.getElementById("player1score").innerHTML= p1_score;
document.getElementById("player2score").innerHTML= p2_score;


document.getElementById("player1name").innerHTML= p1;
document.getElementById("player2name").innerHTML= p2;

document.getElementById("qturn").innerHTML="Question Turn -"+p1;
document.getElementById("aturn").innerHTML="Answer Turn - "+p2;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
 
 qturn =   document.getElementById("qturn").value;
 aturn =   document.getElementById("aturn").value;
    

    actual_answer = parseInt(number1) + parseInt(number2);
    question_number="<h4>" + number1 + "+" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id= 'input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
var question_turn = "player1";
var answer_turn= "player2";


function check(){

get_answer= document.getElementById("input_check_box").value;
if (get_answer == actual_answer){

    if (answer_turn == "player1") {

        p1_score = p1_score +1;
        document.getElementById("player1score").innerHTML= p1_score ;
        
    }
    else{

        p2_score = p2_score+1;
        document.getElementById("player2score").innerHTML= p2_score;
        }

        if ( question_turn=="player1" ) {

            question_turn = "player2";
            document.getElementById("qturn").innerHTML= "Question Turn - " + p2;

        }

        else {
            question_turn = "player1"
            document.getElementById("qturn").innerHTML= "Question Turn - " + p1;
        }

        
        if ( answer_turn=="player1" ) {

            answer_turn = "player2";
            document.getElementById("aturn").innerHTML= "Answer Turn - " + p2;

        }

        else {
            question_turn = "player1"
            document.getElementById("aturn").innerHTML= "Answer Turn - " + p1;
        }
  
}

}