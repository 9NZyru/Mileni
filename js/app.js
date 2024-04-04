const menu = document.querySelector('.perro');
const navegacion = document.querySelector('.navegacion')


document.addEventListener('DOMContentLoaded',()=>{
    eventos();
         
});

const eventos =() =>{
    menu.addEventListener('click',abrirMenu) ;
} 


const abrirMenu =() =>{
    navegacion.classList.remove('ocultar');
    botoncerrar();
    

}
/*agregar la x del menu*/ /*overlay es como cubrir la pantalla*/
const botoncerrar=() =>{
    const btncerrar  = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    /*nos regresa una conexion de datos o sea un arreglo*/
    if(document.querySelectorAll('.pantalla-completa').length>0)return;
    body.appendChild(overlay);
    btncerrar.textContent = 'x';
    btncerrar.classList.add('btn-cerrar');

   //while(navegacion.children[ 5]){
      //  navegacion.removeChild(navegacion.children[5]);
    //}

    navegacion.appendChild(btncerrar);
    cerrarMenu (btncerrar,overlay);

    
}

/*click del btncerrar*/
const cerrarMenu =(boton,overlay) =>{
    boton.addEventListener('click',() =>{;
    navegacion.classList.add('ocultar');
    overlay.remove();
    boton.remove();
});

overlay.onclick = function(){
    overlay.remove();
    navegacion.classList.add('ocultar');
    boton.remove();
}
}


