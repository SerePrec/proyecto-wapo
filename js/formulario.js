const $form = document.getElementById("contactForm");

let temp;

const handleSubmit = e => {
  e.preventDefault();
  clearTimeout(temp);
  $form.submit();
  temp = setTimeout(() => $form.reset(), 1500);
};

$form.addEventListener("submit", handleSubmit);
