let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  speed: 1000,
  loop: true,
  autoplay:{
    delay: 4000,
    displayOnInteraction:false
  },
  grabCursor:true,
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView:1,
  breakpoints:{
    912:{
      slidesPerView:1.7
    }
  }
});


$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^=#]').click(function() {
     // スクロールの速度
     var speed = 400; // ミリ秒
     // アンカーの値取得
     var href= $(this).attr("href");
     // 移動先を取得
     var target = $(href == "#" || href == "" ? 'html' : href);
     // 移動先を数値で取得
     var position = target.offset().top;
     // スムーススクロール
     $('body,html').animate({scrollTop:position}, speed, 'swing');
     return false;
  });
});






document.addEventListener("DOMContentLoaded", function () {
  const els = document.querySelectorAll(".section-about");
  const cb = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("skew");
        observer.unobserve(entry.target);
        console.log(entry.target);
      } else {
      }
    });
  };
  const options = {
    root: null,
    rootMargin: "-150px",
    threshold: 0,
  };
  const io = new IntersectionObserver(cb, options);
  els.forEach((el) => io.observe(el));
});