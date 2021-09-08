const $navbar = document.querySelector("header nav.nav");
const $buttonBar = document.querySelector("header .button-bar");

let compact = isCompact();

function isCompact() {
  let coords = window.scrollY;
  let windowHeight = document.documentElement.clientHeight;
  let compact = coords > 0.2 * windowHeight;
  return compact;
}

window.addEventListener("scroll", () => {
  if (isCompact() && compact === false) {
    $navbar.classList.add("thin");
    compact = true;
    return;
  }
  if (!isCompact() && compact === true) {
    $navbar.classList.remove("thin");
    compact = false;
  }
});
