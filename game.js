function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
    }
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player2_name;
    }
    else
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player1_name;
    }
    if(answer_turn == "player1")
    {
        answer_turn = "player2"
        document.getElementsById("player_answer").innerHTML = "Turno para responder - " + player2_name;
    }
    else
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Turno para responder - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}