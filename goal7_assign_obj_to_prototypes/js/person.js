/* Jose Colon */

(function(){
    var actions =["Gaming","Eating","Napping","Working"];
    var names = ["John", "Bill", "Jose", "Elise", "Aatrox"];
    var jobs = ["Game Dev", "Game tester", "Pro Gamer", "Student"];





    //person constructor object
    function Person(){
        this.name=names[~~(Math.random()*names.length)];
        names.splice(names.indexOf(this.name),1);
        this.action = actions[~~(Math.random()*actions.length)];
        this.jobs=jobs[~~(Math.random()*jobs.length)];

    }

    Person.prototype.update = function(){
        this.action = actions[~~(Math.random()*actions.length)];

    };

    window.Person=Person;
})();
