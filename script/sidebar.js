document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('#sidebar');
    const logos = document.querySelectorAll('.logo');
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    logos.forEach(function (logo) {
        logo.addEventListener('click', function (event) {
            event.stopPropagation();
            sidebar.classList.toggle('active');
        });
    });

    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });

    sidebar.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 2) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });

});


