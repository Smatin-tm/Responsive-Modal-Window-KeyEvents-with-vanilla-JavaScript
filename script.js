'use strict';



let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close-modal');

let modalbtn1 =document.querySelector('.modal1');
let modalbtn2 =document.querySelector('.modal2');
let modalbtn3 =document.querySelector('.modal3');
let overlay = document.querySelector('.overlay');

modalbtn1.addEventListener('click',()=>{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.title').textContent='Welcome to model I 🐱‍💻';
    modal.style='background:peachpuff';

})
modalbtn2.addEventListener('click',()=>{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.title').textContent='Welcome to model II 🐱‍🏍';
    modal.style='background:lightblue';
})
modalbtn3.addEventListener('click',()=>{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.querySelector('.title').textContent='welcome to model III ✌';
    modal.style='background:pink';
})

closeBtn.addEventListener('click', ()=>{modal.classList.add('hidden'); overlay.classList.add('hidden');})

document.addEventListener('keydown', (e)=>{
    
    if (e.key==='Escape'){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }else if(e.key==='1'){
        document.querySelector('.title').textContent='Welcome to model I 🐱‍💻';
        modal.style='background:peachpuff';
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
    else if(e.key==='2'){
        document.querySelector('.title').textContent='Welcome to model II 🐱‍🏍';
        modal.style='background:lightblue';
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
    else if(e.key==='3'){
        document.querySelector('.title').textContent='welcome to model III ✌';
        modal.style='background:pink';
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
})