document.addEventListener("contextmenu", e => e.preventDefault());
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");
navToggle && navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
}), navClose && navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
});
const navLink = document.querySelectorAll(".nav__link"),
    linkAction = () => {
        let e = document.getElementById("nav-menu");
        e.classList.remove("show-menu")
    };
navLink.forEach(e => e.addEventListener("click", linkAction));
const blurHeader = () => {
    let e = document.getElementById("header");
    this.scrollY >= 50 ? e.classList.add("blur-header") : e.classList.remove("blur-header")
};
window.addEventListener("scroll", blurHeader);
let calcScrollValue = () => {
    let e = document.getElementById("progress"),
        t = document.documentElement.scrollTop,
        n = Math.round(100 * t / (document.documentElement.scrollHeight - document.documentElement.clientHeight));
    t > 300 ? e.style.display = "grid" : e.style.display = "none", e.addEventListener("click", () => {
        document.documentElement.scrollTop = 0
    }), e.style.background = `conic-gradient( 	#faaa50 ${n}%, #000000 ${n}%)`
};
window.onscroll = calcScrollValue, window.onload = calcScrollValue;

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 100
});
sr.reveal(".home__data, .explore__data, .explore__user, .footer__container, .section__title, .paragraph, .popular__title, .gallery__desc"), sr.reveal(".home__card, .demo-svg,  .carousel", {
    delay: 400,
    distance: "100px",
    interval: 150
}), sr.reveal(".about__data, .contact-left, .price-item", {
    origin: "right",
    delay: 400,
    distance: "100px",
    interval: 150
}), sr.reveal(".about__image, .contact-right, .home__image_1", {
    origin: "left",
    delay: 400,
    distance: "100px",
    interval: 150
}), sr.reveal(".popular__card, .counters, #btn", {
    interval: 200
}), sr.reveal(".testimonial-wrapper", {
    origin: "bottom",
    distance: "100px",
    interval: 200
}), sr.reveal(".benefit", {
    origin: "bottom",
    interval: 300
}), sr.reveal(".counters", {
    interval: 100
});

let section_counter = document.querySelector("#brojac"),
    counter1 = document.querySelectorAll(".counter .number1"),
    counter2 = document.querySelectorAll(".counter .number2"),
    CounterObserver = new IntersectionObserver((e, t) => {
        let [n] = e;
        if (!n.isIntersecting) return;
        let r = 100;
        counter1.forEach((e, t) => {
            function n() {
                let t = +e.dataset.target,
                    l = +e.innerText;
                l < t ? (e.innerText = Math.ceil(l + t / r), setTimeout(n, 30)) : e.innerText = t
            }
            n()
        }), counter2.forEach((e, t) => {
            function n() {
                let t = +e.dataset.target,
                    r = +e.innerText;
                r < t ? (e.innerText = Math.ceil(r + t / 900), setTimeout(n, 300)) : e.innerText = t
            }
            n()
        }), t.unobserve(section_counter)
    }, {
        root: null,
        threshold: window.innerWidth > 768 ? .4 : .3
    });
CounterObserver.observe(section_counter);

function togglePrices(element) {
    let allDetails = document.querySelectorAll('.price-details');
    let allArrows = document.querySelectorAll('.arrow');
    let details = element.nextElementSibling;
    let arrow = element.querySelector('.arrow');

    allDetails.forEach(item => {
        if (item !== details) {
            item.style.display = 'none';
            item.style.opacity = '0';
        }
    });

    allArrows.forEach(a => {
        if (a !== arrow) {
            a.style.transform = 'rotate(0deg)';
        }
    });

    if (details.style.display === 'block') {
        details.style.display = 'none';
        details.style.opacity = '0';
        arrow.style.transform = 'rotate(0deg)';
    } else {
        details.style.display = 'block';
        setTimeout(() => {
            details.style.opacity = '1';
        }, 10);
        arrow.style.transform = 'rotate(180deg)';
    }
}