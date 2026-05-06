const links = document.querySelectorAll('.menu a');
const sections = document.querySelectorAll('.section');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = this.getAttribute('href').replace('#','');

        // animasi keluar dulu
        sections.forEach(sec => {
            sec.classList.remove('active');
        });

        links.forEach(l => l.classList.remove('active'));

        // delay sedikit biar smooth
        setTimeout(() => {
            document.getElementById(target).classList.add('active');
        }, 100);

        this.classList.add('active');
    });
});