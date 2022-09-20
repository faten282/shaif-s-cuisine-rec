
const naviconeEL=document.querySelector('.nav__icon');
const navcloseEL=document.querySelector('.nav__close');
const navlist=document.querySelector('.nav__list');
const navbgOverlayEL=document.querySelector('.nav__bgOverlay');
const opennavmenu = () =>{

navlist.classList.add('show');
navbgOverlayEL.classList.add('active');
document.body.style='visibility:visible ; height: 100vh ; width:100vh; overflow:hidden;'

}
const closenav = () =>{

navlist.classList.remove('show');
navbgOverlayEL.classList.remove('active');
document.body.style='visibility:visible; height:initial ; width:100%; overflow-x:hidden;'

}



naviconeEL.addEventListener('click',opennavmenu);
navcloseEL.addEventListener('click' , closenav);
navbgOverlayEL.addEventListener('click' , closenav);
//aos

AOS.init({
offset:200,
delay:100,
duration:400,
easing:'ease',
once:false,
mirorr:false,
anchorPlacement:'top-botton'

})