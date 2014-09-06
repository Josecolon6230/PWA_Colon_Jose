/**
 * Created by Dusk on 6/19/14.
 */
(function(){
    var number = ~~(Math.random()*10+1);
    var guess = 0;
    var dom = {input:document.querySelector("#input"),
                output:document.querySelector("#output"),
                button:document.querySelector("button")

    }

    dom.button.addEventListener("click",onClick);

    function onClick(){
        if (isNaN(dom.input.value)||dom.input.value<1 || dom.input.value>10){
            dom.output.innerHTML = "Please follow directions";
        }else{
            checkWinner();
        }
    }
    function checkWinner(){
        guess++;

        if (dom.input.value>number){
            dom.output.innerHTML="You guessed to high"+(3-guess)+"remaining";
        }else if (dom.input.value<number){
            dom.output.innerHTML="You guessed to low"+(3-guess)+"remaining";
        }else{
            dom.output.innerHTML="You win";
        }
    }
})();