
//russay hernandez


(function(){

 var people=[];

  for(var i=0;i<3;i++){
   var p = new Person();
    people.push(p);
  }




    function runUpdate() {

        people.forEach(function(people) {
            people.update();

        });
        populateHTML()
    }



  populateHTML();
     function populateHTML() {
         for (var i = 0; i < people.length; i++) {
             var ul = document.querySelector("#row" + (i + 1));
             ul.children[0].innerHTML = people[i].name;
             ul.children[1].innerHTML = people[i].jobs;
             ul.children[2].innerHTML = people[i].action;
         }
     }

   setInterval(runUpdate, 1000);



})();
