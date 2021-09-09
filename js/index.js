const $carouselLogo = document.getElementById("carousel__logo");
const $headerLogo = document.getElementById("header__logo");
const $navbar = document.querySelector("header nav.nav");
const $buttonBar = document.querySelector("header .button-bar");

let logoVisibility = isVisible($carouselLogo);

function isVisible(elem) {
  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;
  let bottomVisible = coords.bottom > 0;
  return bottomVisible;
}

window.addEventListener("scroll", () => {
  if (isVisible($carouselLogo) && logoVisibility === false) {
    $headerLogo.classList.remove("show");
    $navbar.classList.remove("thin");
    $buttonBar.classList.remove("show");
    logoVisibility = true;
    return;
  }
  if (!isVisible($carouselLogo) && logoVisibility === true) {
    $headerLogo.classList.add("show");
    $navbar.classList.add("thin");
    $buttonBar.classList.add("show");
    logoVisibility = false;
  }
});
