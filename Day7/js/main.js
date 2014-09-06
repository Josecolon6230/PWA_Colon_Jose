/*
 Jose Colon
 06/17/14
 */
(function(){

    displayInterests();
    displayFavorites();


  function displayInterests(){
      for (var i=0;i<person.interests.length;i++){
          document.querySelector("#line"+(i+1)).innerHTML=person.interests[i];
  }
    }
    function displayFavorites(){
        for (var prop in person.favorites){
            console.log(person.favorites[prop]);

        }
    }
})();