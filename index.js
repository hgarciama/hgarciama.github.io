function inArriba(){
    window.addEventListener('scroll',() =>{
        var scroll = document.documentElement.scrollTop;
        console.log(scroll);
        var botonArriba = document.getElementById('botonArriba');

        if(scroll > 300){
            botonArriba.style.right = 20 + "px";
        } else{
            botonArriba.style.right = -100 + "px";
        }
    })
}

inArriba();
