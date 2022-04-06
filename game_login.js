function addUser(){
    player1_sname = document.getElementById("player1_name_input").ariaValueMax;
    player2_name = document.getElementById("player2_name_input").ariaValueMax;

    localStorage.setItem("playe1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "game_page.html";
}