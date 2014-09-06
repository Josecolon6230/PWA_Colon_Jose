/**
 * Created by Dusk on 6/19/14.
 */
(function(){
    var names = ["Joe","Liz","Steve","Bill","Kelly"];
    var studs= [];


   // var student = {name:"Scott",age:43,id:34556456};


    function Student(n){
        this.name=n;
        this.age=0;
        this.id=0;
    }
    for(var i=0;i<1000;i++){
        var s=new Student(names[~~(Math.random()*names.length)]);
        s.age=~~(Math.random()*41+10);
        s.id="AB"+~~(Math.random()*3577893+10000);
        studs.push(s);
    }
    displayStudents();
    function displayStudents(){
        for(var i=0;i<studs.length;i++){
            console.log("Student#"+(i+1));
            console.log(studs[i].name);
            console.log(studs[i].age);
            console.log(studs[i].id);
        }

    }

    //var student1 = new Student("Scott");
    //student1.name="Scott";

   // var student2 = new Student("Cory");
   // student2.name="Cory";

})();