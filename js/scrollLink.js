const navHeightMovile = 86, //px
  navHeightDesktop = 88, //px
  breakPoint = 768, //px
  links = [
    { hash: "dptosConfortables" },
    { hash: "dptos_Confortables" },
    { hash: "espaciosTrabajo" },
    { hash: "espacios_Trabajo" },
    { hash: "espaciosComunes" },
    { hash: "espacios_Comunes" }
  ];
let width;

//Obtener el linkeo actual
const parseLocation = () => location.hash.slice(1);

//Busca que el hash sea válido
const buscarLinkeo = (hash, links) => {
  const linkeo = links.find(l => l.hash === hash);
  if (linkeo) {
    $navbar.classList.add("thin"); // afino la barra para luego tomar la medida correcta del documento
    width = document.documentElement.clientWidth;
    return true;
  } else {
    return false;
  }
};

function scrollLink() {
  const hash = parseLocation();
  const validLink = buscarLinkeo(hash, links);
  if (validLink) {
    setTimeout(
      () => {
        const $element = document.getElementById(`_${hash}`);
        const topCoord = $element.getBoundingClientRect().top;
        const navHeight =
          width > breakPoint ? navHeightDesktop : navHeightMovile;
        document.documentElement.scrollBy({
          top: topCoord - navHeight,
          left: 0,
          behavior: "smooth"
        });
      },
      width > breakPoint ? 500 : 100
    );
  }
}

scrollLink();
