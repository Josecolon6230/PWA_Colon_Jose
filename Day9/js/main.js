/**
 * Created by Dusk on 6/21/14.
 */
(function(){
    var kennel =[];
    var names = ["Fido", "Max", "Shadow","Zeus","Sadie","Teddie"];
    var breeds = ["German Shepherd","Doberman","Mutt","Beagle"];
    var food = ["beans","ham","oranges","pizza","beer","cats"];
    function Dog(){
        this.name="";
        this.breed="";
        this.age=0;
        this.food="";

    }

    Dog.prototype.bark = function(){
        console.log("Woof Woof"," My name is "+this.name+" and I like to eat "+this.food+"!");
    }



for (var i=0;i<100;i++){
    var d=new Dog();
    d.name=names[~~(Math.random()*names.length)];
    d.breed=breeds[~~(Math.random()*breeds.length)];
    d.food=food[~~(Math.random()*food.length)];
    d.age=~~(Math.random()*15+1);
    d.bark();
   // console.log(d.name, d.breed, d.age, d.food);
    kennel.push(d);
}
    //window.Dog= Dog;

    //var dog=new Dog();
})();