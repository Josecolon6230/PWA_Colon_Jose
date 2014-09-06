/*
    Jose Colon
    June 14 2014
	* Mid Terms for PWA-1
*/

(function(){
    var student1 = {
        name: "HectorD",
        address:{street: "Paco lane",city:"crazy",state:"NJ"},
        grades:[80,90,70]
    }

    var student2 = {
        name:"Tahmahn Rud",
        address:{street:"240 Light rd",city:"Pembroke Pines",state:"FL"},
        grades:[60,90,70]
    }


    var leClass=[student1,student2];
    var currentStudent = 0;
    document.querySelector("#info_box").addEventListener("click",onClick);
    logData();
    plusStudent("Taylor nam","Echo street","Hollywood","FL",[100,90,80]);
    logData();
    showHtml();
    function plusStudent(n,s,c,st,g){
        var stud = {};
        stud.name=n;
        stud.address = {street:s,city:c,state:st};
        stud.grades = g;
        leClass.push(stud);
    }

    function onClick(){
        currentStudent++;
        if (currentStudent==leClass.length){
//            currentStudent=0;
            document.querySelector("#info_box").removeEventListener("click",onClick);
        }

        showHtml();

    }
    function getAverage(g){
        var total=0;
        for (var i=0;i< g.length;i++){
            total+=g[i];
        }
        return total/ g.length;
    }
    function date(){
        var today = new Date();
        var month = today.getMonth()+1;
        var day = today.getDate();
        var year = today.getFullYear();
        return month+"/"+day+"/"+year;
    }


    function showHtml(){
        document.querySelector("#name").innerHTML = "Name: "+leClass[currentStudent].name;
        document.querySelector("#address").innerHTML = "Street: "+leClass[currentStudent].address.street;
        document.querySelector("#city").innerHTML = "City: "+leClass[currentStudent].address.city;
        document.querySelector("#state").innerHTML = "State "+leClass[currentStudent].address.state;
        document.querySelector("#grades").innerHTML = "Grades: "+leClass[currentStudent].grades;
        document.querySelector("#date").innerHTML = "Date: "+date();
        var avg = Math.round(getAverage(leClass[currentStudent].grades));
        document.querySelector("#average").innerHTML = "Average Grades: "+avg;
    }
    function  logData(){
        console.log("****Original Info****");
        for (var i=0;i<leClass.length;i++){
            console.log("name: "+leClass[i].name);
            console.log("address: "+leClass[i].address.street+" "+leClass[i].address.city+","+leClass[i].address.state);

            for (var j = 0;j<leClass[i].grades.length;j++){
                console.log("grade"+(j+1)+":"+leClass[i].grades[j]);
            }


            console.log("***New info added with the old***")


        }

    }


})();
