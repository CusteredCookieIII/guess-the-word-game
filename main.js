function addUser()
{
    playeronename=document.getElementById("player1_name_input").value;
    playertwoname=document.getElementById("player2_name_input").value;
    localStorage.setItem('playeronename', playeronename);
    localStorage.setItem('playertwoname', playertwoname);
    window.location="game_page.html";
}

    