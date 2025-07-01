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
document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('background-music');
    const toggleMusicButton = document.getElementById('toggle-music');

    // Tenta tocar a música automaticamente
    // Muitos navegadores bloqueiam a reprodução automática de mídia com som.
    // É uma boa prática iniciar a reprodução com uma interação do usuário.
    backgroundMusic.play().catch(error => {
        console.log('Reprodução automática bloqueada:', error);
        // Opcional: mostrar uma mensagem para o usuário ou habilitar o botão
    });

    // Adiciona um evento de clique ao botão para ligar/desligar a música
    toggleMusicButton.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            toggleMusicButton.textContent = 'Desligar Música';
        } else {
            backgroundMusic.pause();
            toggleMusicButton.textContent = 'Ligar Música';
        }
    });
});