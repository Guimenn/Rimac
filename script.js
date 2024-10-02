document.querySelectorAll('.menu > li').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const submenu = item.querySelector('.submenu');
        submenu.classList.add('visible'); // Adiciona a classe 'visible' ao submenu
    });

    item.addEventListener('mouseleave', () => {
        const submenu = item.querySelector('.submenu');
        submenu.classList.remove('visible'); // Remove a classe 'visible' do submenu
    });
});
