function showMobileMenu(){
    document.getElementsByClassName('mobile-links')[0].classList.remove('mobile-menu-hide');
    document.getElementsByClassName('mobile-links')[0].classList.add('mobile-menu-show');
    document.getElementById('mobile-icon-id').onclick = hideMobileMenu;
}

function hideMobileMenu(){
    document.getElementsByClassName('mobile-links')[0].classList.remove('mobile-menu-show');
    document.getElementsByClassName('mobile-links')[0].classList.add('mobile-menu-hide');
    document.getElementById('mobile-icon-id').onclick = showMobileMenu;
}