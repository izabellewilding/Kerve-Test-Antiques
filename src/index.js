//mobile nav toggle
document
  .getElementById("hamburger")
  .addEventListener("click", function (event) {
    const navList = document.querySelector(".nav-list");
    navList.classList.toggle("mobile-nav-active");
    document.getElementById("hamburger").classList.toggle("is-active");
  });

//arrow navigation
//Code based on https://jsfiddle.net/donu9wsc/
document.querySelectorAll(".smooth-scroll").forEach((anchor) => {
  anchor.onclick = (e) => {
    e.preventDefault();
    const href = anchor.getAttribute("href");
    const target = document.querySelector(href);
    const to = target.offsetTop;
    scrollTo(document.documentElement, to, 1000);
  };
});

const scrollTo = (element, to, duration) => {
  let start = element.offsetTop;
  let change = to - start;
  let currentTime = 0;
  let increment = 20;

  const animateScroll = () => {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
};

// Easing function -> easeInOutQuad
//
//t = current time
//b = start value
//c = change in value
//d = duration
const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};
