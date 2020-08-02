if (!("scrollBehavior" in document.documentElement.style)) {
  import("smoothscroll-polyfill").then(function (smoothscroll) {
    smoothscroll.polyfill();
  });
}

//mobile nav toggle
document
  .getElementById("hamburger")
  .addEventListener("click", function (event) {
    const navList = document.querySelector(".nav-list");
    navList.classList.toggle("mobile-nav-active");
    document.getElementById("hamburger").classList.toggle("is-active");
  });

document.querySelectorAll(".nav-item").forEach(function (listItem) {
  const navList = document.querySelector(".nav-list");
  console.log("looping", listItem);
  listItem.onclick = function (e) {
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
document.querySelectorAll(".smooth-scroll").forEach(function (anchor) {
  anchor.onclick = function (e) {
    e.preventDefault();
    const href = anchor.getAttribute("href");
    const target = document.querySelector(href);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
});

// window.onload = function () {
//   document.querySelector("title");
// };
