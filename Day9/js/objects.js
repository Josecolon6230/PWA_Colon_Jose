/**
 * Created by Dusk on 6/21/14.
 */
/*(function(){
    function Dog(n){
        this.name=n;
        this.breed="";
        this.age=0;
        this.food="";
    }

    Dog.prototype.bark= function(){
        console.log("Woof Woof"," My name is "+this.name+" and I like to eat "+this.food+"!");
    }
    Dog.prototype.food= function(){
        console.log("Stop bothering me. I am eating "+this.food);
    }

})();*/
(function(){
    var clock=0;
    var interval =setInterval(update,1000/60);

    update();
    function update(){
        if (clock<60){
        console.log("tick tock", clock);
        } else {
        console.log("lets go home");
            clearInterval(interval)
        }
        clock++
    }
})();