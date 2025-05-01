document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('#sidebar');
    const logos = document.querySelectorAll('.logo');

    logos.forEach(function(logo) {
        logo.addEventListener('click', function(event) {
            event.stopPropagation(); // Impede que o clique no logo feche o sidebar
            sidebar.classList.toggle('active');
        });
    });

    // Fecha a barra lateral ao clicar fora dela
    document.addEventListener('click', function(event) {
        // Verifica se o clique foi fora da sidebar
        if (!sidebar.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });

    // Previne que o clique dentro da sidebar feche ela
    sidebar.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
