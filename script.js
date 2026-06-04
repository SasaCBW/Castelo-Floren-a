document.querySelector("form")
.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Solicitação enviada com sucesso! Entraremos em contato."
);

this.reset();

});
