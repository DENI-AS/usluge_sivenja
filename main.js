document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { id: 1, name: "Prekrivač - cvetići", price: "3.500 RSD", type: "prekrivac", age: "odrasli", image: "Images/Posteljine za krevet.jpg" },
        { id: 2, name: "Jastučnica Zvezdice", price: "900 RSD", type: "jastucnica", age: "deca", image: "Images/Jastucici za bebe.jpg" },
        { id: 3, name: "Gnezdo za bebe", price: "4.200 RSD", type: "gnezdo", age: "deca", image: "Images/Gnezda za bebe.jpg" },
        { id: 4, name: "Jastučići za bebe", price: "500 RSD", type: "jastucnica", age: "deca", image: "Images/Prekrivaci za bebe.jpg" },
        { id: 5, name: "Prekrivač - zvezdice", price: "3.500 RSD", type: "prekrivac", age: "odrasli", image: "Images/Prekrivaci za bracni lezaj.jpg" },
    ];

    const productGrid = document.getElementById("productGrid");
    renderProducts(products);

    function renderProducts(filtered) {
        if (!productGrid) return;
        productGrid.innerHTML = "";
        filtered.forEach((product) => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p class="product-name">${product.name}</p>
                <p class="product-price">${product.price}</p>`;
            productGrid.appendChild(card);
        });
    }

    function applyFilters() {
        const selectedTypes = Array.from(document.querySelectorAll('.type-filter:checked')).map(cb => cb.value);
        const selectedAges = Array.from(document.querySelectorAll('.age-filter:checked')).map(cb => cb.value);

        const filtered = products.filter(p => {
            const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(p.type);
            const ageMatch = selectedAges.length === 0 || selectedAges.includes(p.age);
            return typeMatch && ageMatch;
        });

        renderProducts(filtered);
    }

    document.querySelectorAll('.type-filter, .age-filter').forEach(cb => {
        cb.addEventListener('change', applyFilters);
    });

    // ------------------ TESTIMONIALS ------------------
    const testimonials = [
        { img: "Images/Danijela.jpg", text: "\"Odlična usluga i kvalitetna izrada! Preporučujem svima!\"", author: "Danijela Jeftić" },
        { img: "Images/Jelena.jpg", text: "\"Brza i profesionalna usluga, sigurno ćemo ponovo sarađivati!\"", author: "Jelena Nikolić" },
        { img: "Images/Marija.jpg", text: "\"Fantastičan tim i besprekoran kvalitet!\"", author: "Marija Lazarević" },
        { img: "Images/Dalibor.jpg", text: "\"Fantastičan tim i besprekoran kvalitet!\"", author: "Dalibor Jovanović" }
    ];

    let currentIndex = 0;
    function updateTestimonial() {
        document.getElementById("profile-img").src = testimonials[currentIndex].img;
        document.getElementById("testimonial-text").textContent = testimonials[currentIndex].text;
        document.getElementById("testimonial-author").textContent = testimonials[currentIndex].author;
    }

    window.prevTestimonial = function () {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
        updateTestimonial();
    };

    window.nextTestimonial = function () {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        updateTestimonial();
    };

    updateTestimonial();

    // ------------------ FORMA ------------------
    const form = document.getElementById("commentForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            let message = document.getElementById("successMessage");
            message.style.display = "block";
            setTimeout(() => location.reload(), 5000);
        });
    }

    // ------------------ PRETHODNA STRANICA ------------------
    if (document.referrer !== "" && window.location.href === "deni-as.com") {
        sessionStorage.setItem('previousPage', document.referrer);
    }

    window.onpopstate = function () {
        if (sessionStorage.getItem('previousPage')) {
            window.location.href = sessionStorage.getItem('previousPage');
        }
    };
});


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
sr.reveal(".home__data, .explore__data, .explore__user, .footer__container, .section__title, .paragraph, .popular__title, .gallery__desc, .product-filters"), sr.reveal(".home__card, .demo-svg,  .carousel", {
    delay: 400,
    distance: "100px",
    interval: 150
}), sr.reveal(".about__data, .contact-left, .price-item, product-filters", {
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
    origin: "left",
    delay: 400,
    distance: "100px",
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

