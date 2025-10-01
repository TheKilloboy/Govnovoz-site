document.addEventListener("DOMContentLoaded", function() {
    // Modal functionality
    window.showModal = function(tariff) {
        const modal = document.getElementById('orderModal');
        const modalText = document.getElementById('modalText');
        const orderNumber = document.getElementById('orderNumber');
        
        const times = {
            'Базовый': '30 минут',
            'Премиум': '15 минут',
            'Бизнес-ланч': 'к обеду',
            'Королевский': 'на карете',
            'VIP': '10 минут'
        };
        
        modalText.textContent = `Ваш заказ по тарифу "${tariff}" принят в обработку. Ожидайте курьера в течение ${times[tariff]}.`;
        orderNumber.textContent = '#' + Math.floor(Math.random() * 900000 + 100000);
        
        modal.style.display = 'flex';
        document.body.classList.add('no-scroll');
    }

    window.closeModal = function() {
        document.getElementById('orderModal').style.display = 'none';
        document.body.classList.remove('no-scroll');
    }

    window.onclick = function(event) {
        const modal = document.getElementById('orderModal');
        if (event.target === modal) {
            closeModal();
        }
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll-triggered animations
    const scrollElements = document.querySelectorAll(".fade-in-element");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("is-visible");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("is-visible");
    }

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    }

    // Initialize elements that are already in view
    handleScrollAnimation();

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('is-active');
            mobileNav.classList.toggle('is-active');
            document.body.classList.toggle('no-scroll');
        });
    }
});