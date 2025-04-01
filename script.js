
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('main section');
    const navLi = document.querySelectorAll('#navbar nav ul li a');
    const navHeight = document.getElementById('navbar').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 50; // Adjust offset as needed
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
});