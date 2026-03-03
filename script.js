const cards = document.querySelectorAll(".card");

function reveal(){
cards.forEach((card,i)=>{
const top = card.getBoundingClientRect().top;
if(top < window.innerHeight - 60){
setTimeout(()=>{
card.style.opacity="1";
card.style.transform="translateY(0)";
}, i*150);
}
});
}

window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);
