function disableScroll(event) {
  event.preventDefault();
}

function slider() {
  const btn = document.querySelector(".menu-content");
  const rotated = document.querySelector(".mobile-menu-icon");
  const changeBg = document.querySelector(".black-back");
  btn.classList.toggle("inview");
  rotated.classList.toggle("menu-open");
  changeBg.classList.toggle("blacky");

  if(btn.classList.contains('inview')){
    document.addEventListener("mousewheel",disableScroll,{passive:false});
    document.addEventListener("touchmove",disableScroll,{passive:false });
    document.body.style.overflow = "hidden";
  }else{
    document.removeEventListener("mousewheel",disableScroll,{passive:false })
    document.removeEventListener("touchmove",disableScroll,{ passive: false})
    document.body.style.overflow = "visible";
  }
}


$(function(){
  setTimeout(function(){
  $('.firstAnimation').fadeOut();
  },2900);});



  



function countdown(due) {
  const now = new Date();

  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest / 1000) % 60;
  const min = Math.floor(rest / 1000 / 60) % 60;
  const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
  const days = Math.floor(rest / 1000 / 60 / 60 / 24);
  const count = [days, hours, min, sec];

  return count;
}

const goal = new Date(2022, 6, 4);

function recalc() {
  const counter = countdown(goal);
  document.getElementById('day').textContent = counter[0];
  document.getElementById('hour').textContent = counter[1];
  document.getElementById('min').textContent = String(counter[2]).padStart(2, '0');
  document.getElementById('sec').textContent = String(counter[3]).padStart(2, '0');
  refresh();  
}

function refresh() {
  setTimeout(recalc, 1000);
}
recalc();


