const revealItems = document.querySelectorAll(".card");

function reveal(){
revealItems.forEach((el,i)=>{
const top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 60){
setTimeout(()=>{
el.style.opacity="1";
el.style.transform="translateY(0)";
}, i*150);
}
});
}

window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);
