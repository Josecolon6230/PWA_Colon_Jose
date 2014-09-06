/*
Jose Colon
06/05/14
The Duel

06/07/14
The Duel #2


 */

//alert("working");

//Will be using Character names from Blazblue

(function(){
    console.log("BATTLE!");
    var lambdaStats = ["Lamda11 ", 25, 100];
    var ragnaStats = ["Ragna ", 28, 100];
    //Character names
  //  var firstPlayerName = "Lambda11";
    //var secondPlayerName = "Ragna";

    //The characters hp
    //var firstPlayerHealth = 100;
    //var secondPlayerHealth = 100;

    //AD is physical damage
    //var playerOneAd = 25;
    //var playerTwoAd = 28;

    //starting round
    var round = 0;


    function battle(){
        //alert(firstPlayerName+":"+firstPlayerHealth+ " VS " +secondPlayerName+":"+secondPlayerHealth);
        alert(lambdaStats+ " VS " +ragnaStats);
        for(var i = 0;0<10;i++){

            var minAd1 = lambdaStats[1]* .5;//playerOnead * .5;
            var minAd2 = ragnaStats[1]* .5;//playerTwoAd * .5;
            var attack1= Math.floor(Math.random()*(lambdaStats[1]-minAd1)+minAd1);
            var attack2= Math.floor(Math.random()*(ragnaStats[1]-minAd2)+minAd2);
            //Damage dealt

            lambdaStats[2]-=attack1;
            ragnaStats[2]-=attack2;


            //firstPlayerHealth-=attack1;
            //secondPlayerHealth-=attack2;

            //console.log(firstPlayerName+":"+firstPlayerHealth+ " " +secondPlayerName+":"+secondPlayerHealth);
            console.log(lambdaStats+ " " +ragnaStats);

            //Lets find out who won
            var result = winnerCheck();
            console.log(result);
            if(result==="no winner"){
                round++;
                //alert(firstPlayerName+":"+firstPlayerHealth+ "ROUND" +round+ "OVER" +secondPlayerName+":"+secondPlayerHealth);
                alert(lambdaStats+ " ROUND " +round+ " OVER " +ragnaStats);
            }else{
                alert(result);
                break;
            };






        };

    };

    function winnerCheck(){
        var result ="no winner";
        if (lambdaStats[2]<1 && ragnaStats[2]<1){
            result = "Its a Draw";
        }else if(lambdaStats[2]<1){
            result = ragnaStats[0]+ " is the Winner!"
        }else if(ragnaStats[2]<1){
            result = lambdaStats[0]+ " is the Winner!"
        }return result;
    };

    battle();












})();

