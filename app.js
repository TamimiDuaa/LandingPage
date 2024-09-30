function logpopup()
{
    document.querySelector(".signin").classList.add("popup");
}
function cancel()
{
    document.querySelector(".signin").classList.remove("popup");
}

function logVisiple(){
    document.querySelector(".register").classList.add("hide");
    document.querySelector(".log").classList.remove("hide");

}

function regVisiple(){
    document.querySelector(".log").classList.add("hide");
    document.querySelector(".register").classList.remove("hide");

}
