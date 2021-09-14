const $form = document.getElementById("contactForm");

const handleSubmit = e => {
  e.preventDefault();
  $form.submit();
  $form.reset();
};

$form.addEventListener("submit", handleSubmit);
