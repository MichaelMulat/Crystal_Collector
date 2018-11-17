$(function () {

    var wins = 0;
    var losses = 0;
    
    // Game start conditions
    var computerScore = 0;
    var crystalValuses = [];
    var playerScore;
    

    function InitializeGame() {
        computerScore = Math.floor((Math.random() * 111) + 19)
        $("#random-score").text(computerScore);

        for (i = 0; i < 4; i++){
            crystalValuses.push(Math.floor((Math.random() * 11) + 1))
        };
        
        $(".diamond").val(crystalValuses[0]);
        $(".club").val(crystalValuses[1]);
        $(".heart").val(crystalValuses[2]);
        $(".spade").val(crystalValuses[3]);
        
        playerScore = 0;
        $("#player-score").text(playerScore);
        
    }

    InitializeGame();
    // UI Elements
    
    $(".crystal-img").on("click", function () {
        clickedCrystalValue = parseInt($(this).val());
        playerScore += clickedCrystalValue;
        $("#player-score").text(playerScore);

        if(playerScore === computerScore) {
            wins++;
            $(".win-num").text(wins);
            InitializeGame();
        } else if (playerScore > computerScore){

            losses++;
            $(".loss-num").text(losses)
            InitializeGame();
        }

    });


    
    
});