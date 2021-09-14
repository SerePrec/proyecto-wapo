const $form = document.getElementById("contactForm");

const handleSubmit = e => {
  $form.reset();
};

$form.addEventListener("submit", handleSubmit);
