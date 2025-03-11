// Navbar functions
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var prevScrollpos = window.pageYOffset;
var navWrap = document.getElementById("navbar-wrap");
var navBody = document.getElementById("navbar");

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos >= currentScrollPos) {
        navWrap.style.top = "0";
        navBody.style.boxShadow = "-1px 4px 15px 0px rgba(209, 205, 209, 0.5)";
    } else {
        navWrap.style.top = "-91px";
        navBody.style.boxShadow = "-1px 4px 15px 0px rgba(209, 205, 209, 0)";
    }
    prevScrollpos = currentScrollPos;
};

// Initialize Swiper for event carousel
var swiper = new Swiper(".mySwiper", {
    breakpoints: {
        1500: { slidesPerView: 3 },
        900: { slidesPerView: 2, spaceBetween: 25 },
    },
    spaceBetween: 10,
    slidesPerView: 1,
    centeredSlides: false,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});

// Contact Form Handling
const iframe = document.getElementById("contact-form");

if (iframe) {
    iframe.scrolling = "no";

    // Function to enable scrolling when form is focused
    const checkActive = () => {
        if (document.activeElement.id === "contact-form") {
            iframe.scrolling = "yes";
        }
    };

    // Observe when the form enters the viewport
    var observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true) {
            window.addEventListener('blur', checkActive);
        } else {
            window.removeEventListener('blur', checkActive);
            iframe.scrolling = "no";
        }
    }, { threshold: [0] });

    observer.observe(document.querySelector("#contact-form"));

    // Ensure the correct Google Form is loaded
    iframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSdCMEzyWRRHGZTRjDh9TCwQ9oDDyhVZX3HyfMQzkvP9IP9Oiw/viewform?embedded=true";
}

// Page Load Handling
const pageLoaded = () => {
    // Animate on Scroll
    AOS.init({
        duration: 800,
        once: true
    });

    // Remove loader screen
    const loader = document.getElementById('loader_block');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 300);
    }

    // Lazy load images without CDN
    const imgs2 = document.querySelectorAll('[data-src-noncdn]');
    imgs2.forEach(img => {
        img.setAttribute('src', img.getAttribute('data-src-noncdn'));
    });

    window.removeEventListener('load', pageLoaded);
};

window.addEventListener('load', pageLoaded);
