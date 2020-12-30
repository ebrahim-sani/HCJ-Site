const menu = decument.querySelector("#mobile-view");
const menuLinks = decument.querySelector(".navbar_menu");

const mobileView = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileView);
