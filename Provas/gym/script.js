
function marcarFeito(botao) {
    // Alterna a classe CSS para mudar a cor para verde
    botao.classList.toggle('concluido');

    // Muda o texto para Alemão
    if (botao.classList.contains('concluido')) {
        botao.innerHTML = "✓ ERLEDIGT"; // Tradução de "Concluído"
    } else {
        botao.innerHTML = "ALS ERLEDIGT MARKIERT"; // Tradução de "Marcar como feito"
    }
}