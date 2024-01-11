document.querySelector(".button").addEventListener("click", function(){
    const elem = document.querySelector(".button");   
    document.querySelector(".button").style.backgroundColor="red";
    document.querySelector(".button").style.border="5px solid firebrick";
    elem.style.top = Math.floor(Math.random()*78) + "px"; 
    elem.style.left = Math.floor(Math.random()*352) + "px";
    /*setTimeout(function(){
        document.querySelector("button").style.backgroundColor="yellow";
    }, 2000);*/
})


document.querySelector(".but1").addEventListener("click", function(){

    document.querySelector("h1").textContent="Muito Obrigado!";
    document.querySelector("h2").classList.add("invisible");
    document.querySelector("img").classList.remove("invisible");

    document.querySelector("h2").style.margin="none"
    document.querySelector("h2").style.height="none"
    document.querySelector("h2").style.width="none"

    document.querySelector("img").style.height="250px";

    document.querySelector(".but1").classList.add("invisible");
    document.querySelector(".but1").style.height="none"
    document.querySelector(".but1").style.width="none"

    document.querySelector(".button").classList.add("invisible");
    document.querySelector(".button").style.height="none"
    document.querySelector(".button").style.width="none"


})