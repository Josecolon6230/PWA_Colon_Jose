/**
 * Created by Dusk on 6/12/14.
 */
//console.log("working");
//arrays and object lit. are data structure
/*
(function(){
    //Data Structure
    //Array Example
    var car = [35, "toyota", 15000,"grey", "rx330"];

    //Object Literal example
    var auto = {mpg:35,make:"Toyota",price:15000,color:"grey",model:"RX330"};

    //Accessing the object literal or array
    console.log("Array", car[3]);
    console.log("Object Literal using dot syntax", auto.color);
    console.log("Object Literal using array access notation", auto["color"]);


    var russayDog = {name:"",
        breed:"German Shepherd",
        color:"black"};
    russayDog.name="Shadow";



    var coryDog = {};
    coryDog.name ="Sadie";
    coryDog.breed = "Sheltie";
    coryDog.color = "Brown";


    var student ={
        name:"Johnny",
        age:22,
        address:{street:"",city:{mayor:"Cory",name:"Orlando",state:"FL"},
        //street:"960 Rolling Hills",
        //city: "Palm Harbor",
        state:"FL",
        grades:[80,90,100]}};






})();
    */

(function(){
    var student1 = {name:"Joe Smith",
        address:{street:"bobs lane",city:"Orlando",state:"FL"},
        grades:[80,90,100]
    }
    var student2 = {name:"Shelly something",
        address:{street:"Shelly lane",city:"Winter Park",state:"FL"},
        grades:[40,50,60]
    }

    var classRoom=[student1,student2];
    var currentStudent =0;
    document.querySelector("button").addEventListener("click", onClick);
    console.log(classRoom[0].address.city);


    logData();

    function onClick(){
        currentStudent++;
        if (currentStudent==classRoom.length){
            currentStudent=0;
        }
        displayHtml();

        function displayHtml(){
            document.querySelector("#name").innerHTML ="Name: "+classRoom[currentStudent].name;
        }

        console.log(currentStudent)
    }

    function logData(){
        console.log("********Student Data********");
        for (var i=0;i<classRoom.length;i++){
            console.log("name:"+classRoom[i].name);
            console.log("address:"+classRoom[i].address.street+ " " +classRoom[i].address.city+ " " +classRoom[i].address.state);
            //console.log("grades:"+classRoom[i].grades);
            for (var j = 0;j<classRoom[i].grades.length;j++){
                console.log("grade"+(j+1)+":"+classRoom[i].grades[j]);
            }
            console.log("-------------------------");
        }
    }
})();