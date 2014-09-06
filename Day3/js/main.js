/**
 * Created by Dusk on 6/7/14.
 */
//alert("Hi")




/*
var score=0;
addToScore(20);
addToScore(5);

console.log(score);


function addToScore(amount){
    var score=-100;
    //score+=amount;
}
*/

/*

(function (){
    var grades = [30, 40, 50];
    var average = getAverage(grades);
console.log("You average grade is" ,average);


    function getAverage(numbs){
        var total=0;
        for (var i=0;i<numbs.length;i++){
                total+=numbs[i];
        };
        return total/numbs.length;
    }

    })();
*/


(function (){
    console.log(coolDate());

        function coolDate(){
    var today =new Date();
    var month =today.getMonth()+1;
    var day = today.getDate();
    var year = today.getFullYear();

    return month+"/"+day+"/"+year;
        }
})();








