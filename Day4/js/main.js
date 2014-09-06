/**
 * Created by Dusk on 6/10/14.
 */
/*(function(){
    var name = "Bob";
    var txt = document.querySelector("#greeting");
    txt.innerHTML = "Yo!!";
    txt.innerHTML = name;
    document.querySelector("#btn").addEventListener("click",onClick);

    function onClick(){
        txt.innerHTML="Wow you know how to click";
    }

       // document.querySelector("#greeting").innerHTML="Crap!";
})();*/

/*
(function(){
    var grades =[80,90,100];
    var grade1 = document.querySelector("#g1");
    var grade2 = document.querySelector("#g2");
    var grade3 = document.querySelector("#g3");
    var averageTxt =document.querySelector("#average");
    var average =0;

    grade1.innerHTML = grades[0];
    grade2.innerHTML = grades[1];
    grade3.innerHTML = grades[2];

    document.querySelector("#btn").addEventListener("click", onClick);

    function onClick(){
       average = getAverage(grades);
        averageTxt.innerHTML ="The average is " +average;
    }

    function getAverage(g){
        var total=0;
        for(var i=0;i< g.length;i++){
            total+=g[i];

        }
        return total/ g.length;
    }
})();*/

(function(){
  var grades = [10,20,30,40,50];
    var tags = [];


    for (var i=1;i<grades.length;i++){
        tags[i-1] = document.querySelector("#g"+i);

    }

    displayGrades()

    function displayGrades(){
    for (var i=0;i<grades.length;i++){
        tags[i].innerHTML = grades[i];

        }
    }
})();