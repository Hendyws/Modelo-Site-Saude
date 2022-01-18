function upscreen() {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}
function scrollbutton() {
    if(window.scrollY === 0) {
        //ocultar botão
        document.querySelector('.up').style.display = 'none';
    } else {
        //mostrar botão
        document.querySelector('.up').style.display = 'block';
    }
}
window.addEventListener('scroll',scrollbutton);
