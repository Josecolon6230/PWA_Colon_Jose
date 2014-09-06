//russay hernandez

(function(){
    var actions = ["Working","too tired to work","Sleeping"];
    var names = ["russay", "ruslan", "mike", "jesus", "leo"];
    var jobs = ["Web Developer", "stunt man", "art thief", "nuclear terroris"];





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
//constructor literal
