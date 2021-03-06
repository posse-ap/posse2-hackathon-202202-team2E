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


// $(function(){
//   setTimeout(function(){
//   $('.firstAnimation').fadeOut();
//   },2900);});



  document.addEventListener("DOMContentLoaded", function () {
    const els = document.querySelectorAll(".apealChild");
    const cb = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("xSlide");
          observer.unobserve(entry.target);
          console.log(entry.target);
        } else {
        }
      });
    };
    const options = {
      root: null,
      rootMargin: "-100px",
      threshold: 0,
    };
    const io = new IntersectionObserver(cb, options);
    els.forEach((el) => io.observe(el));
  });


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

// document.querySelector('.queston__valid').addEventListener('click',function(){
//   const answer = document.querySelector('.question__valid-modal')
//   answer.innerHTML='??????!'
//   console.log('hello')
// })

// document.addEventListener('DOMContentLoaded', function () {

//   const els = document.querySelectorAll('.animate-title');
//   const cb = function (entries, observer) {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               const ta = new TextAnimation(entry.target);
//               ta.animate();
//               observer.unobserve(entry.target);
//           } else {
//           }
//       });
//   };
//   const options = {
//       root: null,
//       rootMargin: "-100px",
//       threshold: 0
//   };
//   const io = new IntersectionObserver(cb, options);
//   els.forEach(el => io.observe(el));
// });


function answerDisplay(){
  const answer = document.querySelector('.question__valid-modal')
  answer.innerHTML='??????!'
  const cracker = document.querySelector('.question__valid-effect')
  cracker.classList.add('question__valid-move')
  const selection = document.querySelectorAll('.selection')
  selection.forEach((value)=>{value.classList.add('none')})
  const border = document.querySelector('.question__valid')
  border.classList.add('border1')
  const border2 = document.querySelector('.question__invalid')
  border2.classList.add('border2')
  const bgColor = document.querySelector('.question__valid')
  bgColor.style.backgroundColor ="gray"
}


function missDisplay(){
  const miss = document.querySelector('.question__valid-modal')
  miss.innerHTML="?????????"
  const cracker =document.querySelector('.question__invalid-effect')
  cracker.classList.add('question__invalid-move')
  const selection = document.querySelectorAll('.selection')
  selection.forEach((value)=>{value.classList.add('none')})
  const border = document.querySelector('.question__valid')
  border.classList.add('border1')
  const bgColor = document.querySelector('.question__valid')
  bgColor.style.backgroundColor ="gray"
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => document.querySelector("#formLink_3").classList.toggle("sink")
  );
});
const observer_2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => document.querySelector("#formLink_3").classList.toggle("sink")
  );
});

observer.observe(document.querySelector("#formLink_1"));
observer.observe(document.querySelector("#formLink_2"));



document.addEventListener("DOMContentLoaded", function () {
  const els2 = document.querySelectorAll(".scroll");
  const cb2 = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("inview2");
        observer.unobserve(entry.target);
        console.log(entry.target);
      } else {
      }
    });
  };
  const options2 = {
    root: null,
    rootMargin: "-100px",
    threshold: 0,
  };
  const io2 = new IntersectionObserver(cb2, options2);
  els2.forEach((el) => io2.observe(el));
});