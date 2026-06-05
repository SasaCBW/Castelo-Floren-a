// Cadastro
const cadastroForm = document.querySelector(".cadastro-form");

if (cadastroForm) {
  cadastroForm.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Cadastro realizado com sucesso!");

    cadastroForm.reset();
  });
}

// Orçamento
const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  if (!form.classList.contains("cadastro-form")) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      alert(
        "Solicitação enviada com sucesso! Em breve entraremos em contato."
      );

      form.reset();
    });
  }
});
