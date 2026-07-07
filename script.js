 // 1. Função do botão "Saiba Mais"
function mostrarMensagem() {
    alert("A sustentabilidade no agronegócio é fundamental para garantir alimentos e preservar os recursos naturais.");
}

// 2. Função do formulário de contato
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o recarregamento da página
    alert("Mensagem enviada com sucesso!");
    this.reset(); // Limpa o formulário
});

// 3. Efeito de clique nos cards da galeria
document.querySelectorAll('.card-imagem').forEach(card => {
    card.addEventListener('click', () => {
        const titulo = card.querySelector('h3').innerText;
        alert(`Explorando: ${titulo}\nAgro Forte, Futuro Sustentável!`);
    });
});
