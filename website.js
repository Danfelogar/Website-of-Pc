//para tiempo de carga 
window.onload = ()=>{
    setTimeout(()=>{
        document.querySelector('body').classList.add('display')
    },4000);
}


//para el desplazamiento del menu

const hiddenMenu = document.querySelector('.top-menu');
hiddenMenu.addEventListener('click',()=>{
    const containerCall = document.querySelector('.container');
    containerCall.classList.toggle("change");//con toggle mostramos la lista
});

//para que el scrool al inicio tenga un tempo de inicio y no se vea instantaneo 
const scrollBtn = document.querySelector(".scroll-btn");
scrollBtn.addEventListener('click', ()=>{
    const html = document.querySelector("html");
    html.style.scrollBehavior ="smooth";
    setTimeout(()=>{
        html.style.scrollBehavior ="unset";
    },1000);
});//La caja se desplaza suavemente, utilizando una función de tiempo definida por el agente de usuario (user-agent) sobre un período de tiempo también definido por éste(de mas esta decir que esta funsion es como inyectarle css desde js )