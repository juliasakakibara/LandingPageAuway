document.addEventListener('DOMContentLoaded', function () {
    // Seletores de Botões
    const btnEN = document.getElementById('btn-en');
    const btnPT = document.getElementById('btn-pt');

    // Função para mudar o idioma
    function switchLanguage(lang) {
        if (lang === 'en') {
            document.documentElement.lang = 'en';
            document.getElementById('sobre').innerHTML = "<h1>About</h1><p>Auwau group</p>";
            document.getElementById('contato').innerHTML = "<h2>Contact</h2><p>Email: <a href='mailto:email@exemplo.com'>email@exemplo.com</a></p>";
        } else {
            document.documentElement.lang = 'pt-br';
            document.getElementById('sobre-mim').innerHTML = "<h1>Sobre Mim</h1><p>Sou Julia Sakakibara, uma designer de produto digital...</p>";
            document.getElementById('contato').innerHTML = "<h2>Contato</h2><p>Email: <a href='mailto:email@exemplo.com'>email@exemplo.com</a></p>";
        }
    }

    // Event Listeners para Mudança de Idioma
    btnEN.addEventListener('click', function () {
        switchLanguage('en'); 
    }); 

    btnPT.addEventListener('click', function () {
        switchLanguage('pt');
    });
});
