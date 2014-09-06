/**
 * Created by Dusk on 6/19/14.
 */
//alert("working");

//Will be using Character names from Blazblue

(function(){
    console.log("BATTLE!");
    var lambdaStats = {name:"Lambda11",damage:25,health:100};//["Lamda11 ", 25, 100];
    var ragnaStats = {name:"Ragna",damage:28,health:100};//["Ragna ", 28, 100];
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

    function onClick() {
        round++;

    }

    document.querySelector("#fight_box").addEventListener("click", onClick);

    function battle(){
        //alert(firstPlayerName+":"+firstPlayerHealth+ " VS " +secondPlayerName+":"+secondPlayerHealth);
        //alert(lambdaStats+ " VS " +ragnaStats);
        for(var i = 0;0<10;i++){

            var minAd1 = lambdaStats.damage* .5;//playerOnead * .5;
            var minAd2 = ragnaStats.damage* .5;//playerTwoAd * .5;
            var attack1= Math.floor(Math.random()*(lambdaStats.damage-minAd1)+minAd1);
            var attack2= Math.floor(Math.random()*(ragnaStats.damage-minAd2)+minAd2);
            //Damage dealt

            lambdaStats.health-=attack1;
            ragnaStats.health-=attack2;


            //firstPlayerHealth-=attack1;
            //secondPlayerHealth-=attack2;

            //console.log(firstPlayerName+":"+firstPlayerHealth+ " " +secondPlayerName+":"+secondPlayerHealth);
            console.log(lambdaStats.name+ " VS " +ragnaStats.name);
            console.log(lambdaStats.health+ " " +ragnaStats.health);

            //Lets find out who won
            var result = winnerCheck();
            console.log(result);
            if(result==="no winner"){
                round++;
                //alert(firstPlayerName+":"+firstPlayerHealth+ "ROUND" +round+ "OVER" +secondPlayerName+":"+secondPlayerHealth);
                //alert(lambdaStats+ " ROUND " +round+ " OVER " +ragnaStats);
            }else{
                //alert(result);
                break;
            }






        }

    }






    function winnerCheck(){
        var result ="no winner";
        if (lambdaStats.health<1 && ragnaStats.health<1){
            result = "Its a Draw";
        }else if(lambdaStats.health<1){
            result = ragnaStats.name+ " is the Winner!"
        }else if(ragnaStats.health<1){
            result = lambdaStats.name+ " is the Winner!"
        }return result;
    }

    battle();












})();