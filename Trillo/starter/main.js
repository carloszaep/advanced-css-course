const sideBar = document.querySelector(".sidebar");
const links = document.querySelectorAll(".side-nav__item");

sideBar.addEventListener("click", function (e) {
  const link = e.target.closest(".side-nav__item");
  if (!link) return;

  links.forEach((element) => {
    element.classList.remove("side-nav__item--active");
  });

  link.classList.toggle("side-nav__item--active");
});
