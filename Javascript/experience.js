console.log("Staynest Experience JavaScript activated");


// ---------------- MOBILE NAVBAR ----------------

const menuButton = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");

if (menuButton && navPanel) {
    menuButton.addEventListener("click", () => {
        const isOpen = navPanel.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", isOpen);

        menuButton.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });
}


// ---------------- SEARCH PANEL ----------------

const searchOpenButton =
    document.querySelector("#searchOpenButton");

const searchCloseButton =
    document.querySelector("#searchCloseButton");

const searchPanel =
    document.querySelector("#destinationSearchPanel");

const searchForm =
    document.querySelector("#destinationSearchForm");

const searchInput =
    document.querySelector("#destinationSearchInput");


const openSearchPanel = () => {
    searchPanel.classList.add("open");

    searchPanel.setAttribute(
        "aria-hidden",
        "false"
    );

    searchInput.focus();
};


const closeSearchPanel = () => {
    searchPanel.classList.remove("open");

    searchPanel.setAttribute(
        "aria-hidden",
        "true"
    );
};


if (
    searchOpenButton &&
    searchCloseButton &&
    searchPanel &&
    searchForm &&
    searchInput
) {
    searchOpenButton.addEventListener(
        "click",
        openSearchPanel
    );


    searchCloseButton.addEventListener("click", () => {
        closeSearchPanel();
        searchInput.value = "";
    });


    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const searchTerm =
            searchInput.value.trim();

        if (searchTerm === "") {
            searchInput.focus();
            return;
        }

        window.location.href =
            `destination.html?search=${encodeURIComponent(
                searchTerm
            )}`;
    });


    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeSearchPanel();
        }
    });
}


// ---------------- WISHLIST ----------------

const wishlistButton =
    document.querySelector(
        '.icon-button[aria-label="Wishlist"]'
    );

if (wishlistButton) {
    wishlistButton.addEventListener("click", () => {
        const heartIcon =
            wishlistButton.querySelector("i");

        const isSaved =
            wishlistButton.classList.toggle("saved");

        heartIcon.classList.toggle(
            "fa-regular",
            !isSaved
        );

        heartIcon.classList.toggle(
            "fa-solid",
            isSaved
        );
    });
}


// ---------------- MOOD SELECTOR ----------------

const moodButtons =
    document.querySelectorAll(".mood-item");

moodButtons.forEach((button) => {
    button.addEventListener("click", () => {
        moodButtons.forEach((moodButton) => {
            moodButton.classList.remove("active");
        });

        button.classList.add("active");
    });
});


// ---------------- EXPERIENCE CAROUSEL ----------------

const carousel =
    document.querySelector(".featured");

const experienceSlides =
    document.querySelectorAll(".experience-slide");

const numberButtons =
    document.querySelectorAll(
        ".slider-count button"
    );

const previousButton =
    document.querySelector(
        ".slider-arrow.previous"
    );

const nextButton =
    document.querySelector(
        ".slider-arrow.next"
    );

let currentSlide = 0;
let autoplayTimer;


const showSlide = (slideIndex) => {
    if (slideIndex >= experienceSlides.length) {
        currentSlide = 0;
    }

    else if (slideIndex < 0) {
        currentSlide =
            experienceSlides.length - 1;
    }

    else {
        currentSlide = slideIndex;
    }


    experienceSlides.forEach((slide, index) => {
        slide.classList.toggle(
            "active",
            index === currentSlide
        );
    });


    numberButtons.forEach((button, index) => {
        button.classList.toggle(
            "current",
            index === currentSlide
        );
    });
};


const nextSlide = () => {
    showSlide(currentSlide + 1);
};


const previousSlide = () => {
    showSlide(currentSlide - 1);
};


const stopAutoplay = () => {
    clearInterval(autoplayTimer);
};


const startAutoplay = () => {
    stopAutoplay();

    autoplayTimer = setInterval(
        nextSlide,
        3000
    );
};


if (
    carousel &&
    experienceSlides.length > 0 &&
    previousButton &&
    nextButton
) {
    showSlide(0);


    nextButton.addEventListener("click", () => {
        nextSlide();
        startAutoplay();
    });


    previousButton.addEventListener("click", () => {
        previousSlide();
        startAutoplay();
    });


    numberButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            showSlide(index);
            startAutoplay();
        });
    });


    carousel.addEventListener(
        "mouseenter",
        stopAutoplay
    );


    carousel.addEventListener(
        "mouseleave",
        startAutoplay
    );


    startAutoplay();
}


// ---------------- SMOOTH SCROLL ----------------

const exploreButton =
    document.querySelector(
        'a[href="#featured-experience"]'
    );

if (exploreButton) {
    exploreButton.addEventListener("click", (event) => {
        event.preventDefault();

        document
            .querySelector("#featured-experience")
            .scrollIntoView({
                behavior: "smooth"
            });
    });
}


// ---------------- NEWSLETTER ----------------

const newsletterForm =
    document.querySelector(".footer-newsletter");

const newsletterEmail =
    document.querySelector("#footerEmail");

if (newsletterForm && newsletterEmail) {
    const newsletterMessage =
        document.createElement("p");

    newsletterMessage.className =
        "newsletter-message";

    newsletterForm.append(newsletterMessage);


    newsletterForm.addEventListener(
        "submit",
        (event) => {
            event.preventDefault();

            if (!newsletterEmail.checkValidity()) {
                newsletterMessage.textContent =
                    "Please enter a valid email address.";

                newsletterMessage.classList.add(
                    "error"
                );

                return;
            }

            newsletterMessage.textContent =
                "Thank you! You have successfully subscribed.";

            newsletterMessage.classList.remove(
                "error"
            );

            newsletterForm.reset();
        }
    );
}
// ---------------- PLAN YOUR TRIP MODAL ----------------

const tripModal = document.querySelector("#tripModal");
const tripClose = document.querySelector("#tripModalClose");
const tripForm = document.querySelector("#tripPlannerForm");

document.querySelectorAll(".open-trip-modal").forEach((button) => {
    button.addEventListener("click", () => {
        tripModal.classList.add("open");
        document.body.classList.add("modal-open");
    });
});

tripClose.addEventListener("click", () => {
    tripModal.classList.remove("open");
    document.body.classList.remove("modal-open");
});

tripModal
    .querySelector(".trip-modal-overlay")
    .addEventListener("click", () => {
        tripClose.click();
    });

tripForm.addEventListener("submit", (event) => {
    event.preventDefault();

    document.querySelector("#tripFormMessage").textContent =
        "Your trip idea is ready!";

    tripForm.reset();
});