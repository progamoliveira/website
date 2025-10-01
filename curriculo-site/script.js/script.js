document.addEventListener('DOMContentLoaded', function() {
    // 1. SCROLL SUAVE
    // Faz a página rolar de forma suave ao clicar nos links do menu.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. ADICIONAR CLASSE PARA ANIMAÇÃO AO ROLAR (SCROLL)
    const sections = document.querySelectorAll('.secao');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'fade-in' quando a seção entra na tela
                entry.target.classList.add('fade-in');
                // Para de observar depois que a animação é ativada uma vez
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // 10% da seção deve estar visível para disparar
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // 3. MENU HAMBURGUER (Para telas pequenas) - REQUER AJUSTE NO HTML E CSS
    // Como seu menu é simples, este é um conceito que você pode expandir. 
    // Por enquanto, vamos manter o foco nas animações de scroll.
    // Se quiser o menu hamburguer, me avise que eu ajusto o HTML e o CSS para você!

});