document.addEventListener("DOMContentLoaded", function () {
  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add("inview");
      console.log(el);
    }
  };

  const so = new ScrollObserver(".cover-slide", cb);
});

class ScrollObserver {
  constructor(els, cb, options) {
    this.els = document.querySelectorAll(els);
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true,
    };
    this.cb = cb;
    this.options = Object.assign(defaultOptions, options);
    this.once = this.options.once;
    this._init();
  }
  _init() {
    const callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.cb(entry.target, true);
          if (this.once) {
            observer.unobserve(entry.target);
          }
        } else {
          this.cb(entry.target, false);
        }
      });
    };

    this.io = new IntersectionObserver(callback.bind(this), this.options);

    // @see https://github.com/w3c/IntersectionObserver/tree/master/polyfill
    this.io.POLL_INTERVAL = 100;

    this.els.forEach((el) => this.io.observe(el));
  }

  destory() {
    this.io.disconnect();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const els = document.querySelectorAll(".animate-title");
  const cb = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const ta = new TextAnimation(entry.target);
        ta.animate();
        observer.unobserve(entry.target);
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
