const hamburger=document.querySelector('#hamburger');
const nav=document.querySelector('#nav');
const layer=document.querySelector('#layer');
const boxNav=document.querySelector('#box-nav');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    nav.classList.toggle('nav-active');
    layer.classList.toggle('layer-active');
    boxNav.classList.toggle('bg-[#F2F8FC]');
});