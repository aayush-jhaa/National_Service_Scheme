let mybutton = document.getElementById("myBtn");
let fixedElement = document.getElementsByClassName("menu-items");

// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (event) {
//     event.preventDefault();
//     document.querySelector(
//       this.getAttribute("href"),
//       scrollIntoView({
//         behavior: "smooth",
//       })
//     );
//   });
// });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("anishow");
    }
  });
});

const hiddenElements = document.querySelectorAll(".anihidden");
hiddenElements.forEach((el) => observer.observe(el));

window.onscroll = function () {
  scrollFunction();
  fixedHeaderFunction();
};

function fixedHeaderFunction() {
  if (
    document.body.scrollTop > 136.01 ||
    document.documentElement.scrollTop > 136.01
  ) {
    fixedElement[0].classList.add("fixed-header");
  } else {
    fixedElement[0].classList.remove("fixed-header");
  }
}

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
