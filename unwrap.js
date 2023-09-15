
const p=document.querySelector(".modal");
const overl=document.querySelector(".overlay");
// const overl=document.querySelector(".overlay");
const openModal=() =>{
    p.classList.add("show");
    overl.classList.add("overlayactive");
    console.log('a');
};
const closeModal=() =>{
    p.classList.remove('show');
    overl.classList.remove('overlayactive');
    console.log('a');
};




