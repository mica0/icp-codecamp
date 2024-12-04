const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=50) {
        header.classList.add('navbarGrey');
    }
    else {
        header.classList.remove('navbarGrey');
    }
}