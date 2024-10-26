!(function () {
    "use strict";
    function e() {
        let e = document.querySelector("body"),
            t = document.querySelector("#header");
        (t.classList.contains("scroll-up-sticky") || t.classList.contains("sticky-top") || t.classList.contains("fixed-top")) && (window.scrollY > 100 ? e.classList.add("scrolled") : e.classList.remove("scrolled"));
    }
    document.addEventListener("scroll", e), window.addEventListener("load", e);
    let t = document.querySelector(".mobile-nav-toggle");
    function i() {
        document.querySelector("body").classList.toggle("mobile-nav-active"), t.classList.toggle("bi-list"), t.classList.toggle("bi-x");
    }
    t.addEventListener("click", i),
        document.querySelectorAll("#navmenu a").forEach((e) => {
            e.addEventListener("click", () => {
                document.querySelector(".mobile-nav-active") && i();
            });
        }),
        document.querySelectorAll(".navmenu .toggle-dropdown").forEach((e) => {
            e.addEventListener("click", function (e) {
                e.preventDefault(), this.parentNode.classList.toggle("active"), this.parentNode.nextElementSibling.classList.toggle("dropdown-active"), e.stopImmediatePropagation();
            });
        });
    let o = document.querySelector("#preloader");
    o &&
        window.addEventListener("load", () => {
            o.remove();
        });
    let l = document.querySelector(".scroll-top");
    function r() {
        l && (window.scrollY > 100 ? l.classList.add("active") : l.classList.remove("active"));
    }
    function s() {
        AOS.init({ duration: 600, easing: "ease-in-out", once: !0, mirror: !1 });
    }
    l.addEventListener("click", (e) => {
        e.preventDefault(), window.scrollTo({ top: 0, behavior: "smooth" });
    }),
        window.addEventListener("load", r),
        document.addEventListener("scroll", r),
        window.addEventListener("load", s),
        GLightbox({ selector: ".glightbox" }),
        document.querySelectorAll(".isotope-layout").forEach(function (e) {
            let t = e.getAttribute("data-layout") ?? "masonry",
                i = e.getAttribute("data-default-filter") ?? "*",
                o = e.getAttribute("data-sort") ?? "original-order",
                l;
            imagesLoaded(e.querySelector(".isotope-container"), function () {
                l = new Isotope(e.querySelector(".isotope-container"), { itemSelector: ".isotope-item", layoutMode: t, filter: i, sortBy: o });
            }),
                e.querySelectorAll(".isotope-filters li").forEach(function (t) {
                    t.addEventListener(
                        "click",
                        function () {
                            e.querySelector(".isotope-filters .filter-active").classList.remove("filter-active"), this.classList.add("filter-active"), l.arrange({ filter: this.getAttribute("data-filter") }), s();
                        },
                        !1
                    );
                });
        }),
        window.addEventListener("load", function e() {
            document.querySelectorAll(".init-swiper").forEach(function (e) {
                let t = JSON.parse(e.querySelector(".swiper-config").innerHTML.trim());
                e.classList.contains("swiper-tab") ? initSwiperWithCustomPagination(e, t) : new Swiper(e, t);
            });
        }),
        new PureCounter();
})();
