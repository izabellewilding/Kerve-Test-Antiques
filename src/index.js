//mobile nav toggle
document
  .getElementById("hamburger")
  .addEventListener("click", function (event) {
    const navList = document.querySelector(".nav-list");
    navList.classList.toggle("mobile-nav-active");
    document.getElementById("hamburger").classList.toggle("is-active");
  });

document.querySelectorAll(".nav-item").forEach((listItem) => {
  const navList = document.querySelector(".nav-list");
  console.log("looping", listItem);
  listItem.onclick = (e) => {
    console.log("on click");
    navList.classList.remove("mobile-nav-active");
    document.getElementById("hamburger").classList.remove("is-active");
  };
});

// event items slide up animation
function slideAnimation() {
  const eventsEl = document.querySelector(".event-items");
  const position = eventsEl.getBoundingClientRect().top;

  // console.warn("scroll", scrollPosition);
  if (position - eventsEl.clientHeight * 2 <= 100) {
    eventsEl.classList.add("inView");
  }
}

//hero zoom on scroll animation
function heroZoom() {
  const scrollPosition = window.scrollY;
  const heroImg = document.querySelector(".hero-img");
  if (scrollPosition >= 30) {
    heroImg.classList.add("hero-zoom");
  } else {
    heroImg.classList.remove("hero-zoom");
  }
}

//call the utility function with each animation on scroll
window.addEventListener("scroll", function (e) {
  slideAnimation();
  heroZoom();
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
