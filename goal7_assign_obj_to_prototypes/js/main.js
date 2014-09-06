/* Jose Colon*/

(function(){

    var peeps =[];

    for (var i=0;i<3;i++){
        var s = new Person();
        peeps.push(s);

    }

    function run(){
        peeps.forEach(function(peeps){
            peeps.update()

        });
    }

    popHTML();
    function popHTML(){
        for (var i=0; i < peeps.length; i++) {
            var ul = document.querySelector("#row" + (i + 1));
            ul.children[0].innerHTML = peeps[i].name;
            ul.children[1].innerHTML = peeps[i].jobs;
            ul.children[2].innerHTML = peeps[i].action;
        }
    }

    setInterval(run, 500);




})();


i