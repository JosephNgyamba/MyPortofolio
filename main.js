// HUMBERGER MENU //

const burger=document.querySelector('.burger');
const burger_menu=document.querySelector('.navbar');
console.log(burger);
burger.addEventListener('click',()=>{
    burger.classList.toggle('active');
    burger_menu.classList.toggle('active-menu')
})



