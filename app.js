// select items
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// add event listener
navToggle.addEventListener("click", function () {
  //   links.classList.add("show-links");

  //   if (links.classList.contains("show-links")) {
  //     links.classList.remove("show-links");
  //   } else {
  //     links.classList.add("show-links");
  //   }

  links.classList.toggle("show-links");
});
