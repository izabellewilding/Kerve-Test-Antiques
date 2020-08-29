//Contains working jquery and vanilla JS code for each function

//smooth scroll polyfill to make scroll work on IOS
if (!("scrollBehavior" in document.documentElement.style)) {
  import("smoothscroll-polyfill").then(function (smoothscroll) {
    smoothscroll.polyfill();
  });
}

//mobile navigation toggle
// document
//   .getElementById("hamburger")
//   .addEventListener("click", function (event) {
//     const navList = document.querySelector(".nav-list");
//     navList.classList.toggle("mobile-nav-active");
//     document.getElementById("hamburger").classList.toggle("is-active");
//   });

//jquery: mobile navigation toggle
$(".hamburger").click(function () {
  $(".nav-list").toggleClass("mobile-nav-active");
  $(".hamburger").toggleClass("is-active");
});

// closes mobile nav when a list item is click/navigated to
// document.querySelectorAll(".nav-item").forEach(function (listItem) {
//   const navList = document.querySelector(".nav-list");
//   listItem.onclick = function (e) {
//     navList.classList.remove("mobile-nav-active");
//     document.getElementById("hamburger").classList.remove("is-active");
//   };
// });

//jquery: closes mobile nav when a list item is clicked/navigated to
$(".nav-item").each(function (i, listItem) {
  $(listItem).click(function () {
    $(".nav-list").removeClass("mobile-nav-active");
    $(".hamburger").removeClass("is-active");
  });
});

// event items slide up animation
function slideAnimation() {
  const eventsEl = document.querySelector(".event-items");
  const position = eventsEl.getBoundingClientRect().top;

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

//smooth scroll navigation
//looks for an element with the smooth-scroll classname
document.querySelectorAll(".smooth-scroll").forEach(function (anchor) {
  //adds an onclick event handler
  anchor.onclick = function (e) {
    //prevents the default behaviour of jumping to the element
    e.preventDefault();
    //looks at the href value
    const href = anchor.getAttribute("href");
    //navigate to the corresponding element
    const target = document.querySelector(href);
    //using native scroll behaviour, cross browser support
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
});
