console.log("Staynest About JavaScript activated");


// ---------------- MOBILE NAVBAR ----------------

const aboutMenuButton =
    document.querySelector(".about-menu-toggle");

const aboutNavPanel =
    document.querySelector(".about-nav-panel");


aboutMenuButton?.addEventListener("click", () => {

    const menuIsOpen =
        aboutNavPanel.classList.toggle("open");


    aboutMenuButton.setAttribute(
        "aria-expanded",
        menuIsOpen
    );


    aboutMenuButton.innerHTML = menuIsOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});


aboutNavPanel
    ?.querySelectorAll("a")
    .forEach((link) => {

        link.addEventListener("click", () => {

            aboutNavPanel.classList.remove("open");

            aboutMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            aboutMenuButton.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });


// ---------------- SEARCH PANEL ----------------

const aboutSearchOpen =
    document.querySelector("#aboutSearchOpen");

const aboutSearchClose =
    document.querySelector("#aboutSearchClose");

const aboutSearchPanel =
    document.querySelector("#aboutSearchPanel");

const aboutSearchForm =
    document.querySelector("#aboutSearchForm");

const aboutSearchInput =
    document.querySelector("#aboutSearchInput");


const openAboutSearch = () => {

    aboutSearchPanel.classList.add("open");

    aboutSearchPanel.setAttribute(
        "aria-hidden",
        "false"
    );

    aboutSearchInput.focus();

};


const closeAboutSearch = () => {

    aboutSearchPanel.classList.remove("open");

    aboutSearchPanel.setAttribute(
        "aria-hidden",
        "true"
    );

};


aboutSearchOpen?.addEventListener(
    "click",
    openAboutSearch
);


aboutSearchClose?.addEventListener("click", () => {

    closeAboutSearch();

    aboutSearchInput.value = "";

});


aboutSearchForm?.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const searchTerm =
            aboutSearchInput.value.trim();


        if (searchTerm === "") {

            aboutSearchInput.focus();

            return;

        }


        window.location.href =
            `destination.html?search=${encodeURIComponent(
                searchTerm
            )}`;

    }
);


// Close search by pressing Escape

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        aboutSearchPanel?.classList.contains("open")
    ) {

        closeAboutSearch();

    }

});


// ---------------- WISHLIST ----------------

const aboutWishlist =
    document.querySelector("#aboutWishlist");


aboutWishlist?.addEventListener("click", () => {

    const heartIcon =
        aboutWishlist.querySelector("i");


    heartIcon.classList.toggle("fa-regular");

    heartIcon.classList.toggle("fa-solid");


    const isSaved =
        heartIcon.classList.contains("fa-solid");


    aboutWishlist.setAttribute(
        "aria-label",
        isSaved
            ? "Remove from wishlist"
            : "Wishlist"
    );

});


// ---------------- AUTOMATIC FOOTER YEAR ----------------

const currentYear =
    document.querySelector("#currentYear");


if (currentYear) {

    currentYear.innerText =
        new Date().getFullYear();

}