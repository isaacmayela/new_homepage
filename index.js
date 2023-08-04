const iconHumberger = document.getElementById("icon-hamburger");
const menuMobile = document.getElementById("menu-mobile");

iconHumberger.onclick = function(){
	menuMobile.classList.toggle('active');
    if (iconHumberger.src.includes('icon-hamburger')){
        iconHumberger.src = '../images/icon-close.svg';
    }else{
        iconHumberger.src = '../images/icon-hamburger.svg';
    }
    
}