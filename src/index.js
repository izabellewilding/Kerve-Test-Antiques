//mobile nav toggle
document
  .getElementById("hamburger")
  .addEventListener("click", function (event) {
    const navList = document.querySelector(".nav-list");
    navList.classList.toggle("mobile-nav-active");
  });
