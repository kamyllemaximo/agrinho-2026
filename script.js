document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Mensagem enviada com sucesso!");

    this.reset();
});

function mostrarMensagem() {
    alert("A sustentabilidade no agronegócio é fundamental para garantir alimentos e preservar os recursos naturais.");
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Mensagem enviada com sucesso!");

    this.reset();
});

function mostrarMensagem() {
    alert("A sustentabilidade no agronegócio é fundamental para garantir alimentos e preservar os recursos naturais.");
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Mensagem enviada com sucesso!");

    this.reset();
});



// Adiciona um efeito simples de clique para destacar a mensagem do projeto
document.querySelectorAll('.card-imagem').forEach(card => {
    card.addEventListener('click', () => {
        const titulo = card.querySelector('h3').innerText;
        alert(`Explorando: ${titulo}\nAgro Forte, Futuro Sustentável!`);
    });
});
