document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('meuBotao');

    botao.addEventListener('click', function(event) {
        criarCoracao(event);
    });

    function criarCoracao(event) {
        const botao = event.currentTarget;
        const coracao = document.createElement('span');
        coracao.classList.add('coracao');
        coracao.innerHTML = '❤️';
        alert ("Tentou ir em ela primeiro né.💕💕💕");

        const x = event.clientX - botao.getBoundingClientRect().left;
        const y = event.clientY - botao.getBoundingClientRect().top;
        coracao.style.left = `${x}px`;
        coracao.style.top = `${y}px`;

        botao.appendChild(coracao);

        coracao.addEventListener('animationend', () => {
            coracao.remove();
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('botao');

  botao.addEventListener('mouseover', () => {
    botao.style.opacity = '0';
    botao.style.pointerEvents = 'none';
  });
});
