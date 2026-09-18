console.log("StayNest Javascript activated");

// ================= HERO VIDEO CONTROL =================

const heroVideo = document.querySelector(".hero-video");
const videoControl = document.querySelector(".video-control");
const videoControlText = videoControl.querySelector("span");
const videoControlIcon = videoControl.querySelector("i");
console.log(heroVideo);
console.log(videoControl);

videoControl.addEventListener("click", () => {
    console.log("Video button clicked");
     if (heroVideo.paused){
        heroVideo.play();
        videoControlText.innerText = "Pause";
        videoControlIcon.className =  "fa-solid fa-pause";
     } else{
        heroVideo.pause();
        videoControlText.innerText = "Play"
        videoControlIcon.className = "fa-solid fa-play";
     }
});

// ---------------- STAY WISHLIST ----------------

// Select all four wishlist buttons
const wishlistButtons =
    document.querySelectorAll(".stay-wishlist-btn");

let savedStays =
    JSON.parse(localStorage.getItem("staynestWishlist")) || [];

wishlistButtons.forEach((button) => {
    const heartIcon = button.querySelector("i");
    const stayId = button.dataset.stayId;

    // Restore the saved heart after refreshing
    if (savedStays.includes(stayId)) {
        heartIcon.classList.remove("fa-regular");
        heartIcon.classList.add("fa-solid");
        button.classList.add("saved");
    }

    button.addEventListener("click", () => {
        if (heartIcon.classList.contains("fa-regular")) {
            heartIcon.classList.remove("fa-regular");
            heartIcon.classList.add("fa-solid");
            button.classList.add("saved");

            savedStays.push(stayId);
        } else {
            heartIcon.classList.remove("fa-solid");
            heartIcon.classList.add("fa-regular");
            button.classList.remove("saved");

            savedStays = savedStays.filter(
                (savedStay) => savedStay !== stayId
            );
        }

        localStorage.setItem(
            "staynestWishlist",
            JSON.stringify(savedStays)
        );
    });
});

// ---------------- NAVBAR SEARCH ----------------

const searchButton = document.querySelector(".search-btn");
const searchPanel = document.querySelector(".search-panel");
const searchInput = document.querySelector(".search-input");
const searchCloseButton = document.querySelector(".search-close-btn");

 searchButton.addEventListener("click", () => {

    // If search box is closed, open it
    if (!searchPanel.classList.contains("active")) {
        searchPanel.classList.add("active");
        searchInput.focus();
        return;
    }

    // If already open, collect what the user typed
    const searchTerm = searchInput.value.trim();

    // Don't search if the input is empty
    if (searchTerm === "") {
        searchInput.focus();
        return;
    }

    // Send the search to the Stays page
    window.location.href =
        `stays.html?search=${encodeURIComponent(searchTerm)}`;
});


searchCloseButton.addEventListener("click", () => {
    searchPanel.classList.remove("active");
    searchInput.value = "";
});

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchButton.click();
    }
});

// ---------------- NEWSLETTER ----------------

const newsletterForm =
    document.querySelector(".newsletter-form");

const newsletterEmail =
    document.querySelector("#newsletterEmail");

let newsletterMessage =
    document.querySelector(".newsletter-message");


if (newsletterForm && newsletterEmail) {

    if (!newsletterMessage) {
        newsletterMessage =
            document.createElement("p");

        newsletterMessage.className =
            "newsletter-message";

        newsletterForm.append(newsletterMessage);
    }


    newsletterForm.addEventListener(
        "submit",
        (event) => {
            event.preventDefault();

            const email =
                newsletterEmail.value.trim();


            if (email === "") {
                newsletterMessage.innerText =
                    "Please enter your email address.";

                newsletterEmail.focus();

                return;
            }


            if (!newsletterEmail.checkValidity()) {
                newsletterMessage.innerText =
                    "Please enter a valid email address.";

                newsletterEmail.focus();

                return;
            }


            newsletterMessage.innerText =
                "Thank you! Travel inspiration is heading your way.";

            newsletterEmail.value = "";


            setTimeout(() => {
                newsletterMessage.innerText = "";
            }, 4000);
        }
    );
}
// ---------------- AUTOMATIC FOOTER YEAR ----------------

const currentYear = document.querySelector("#currentYear");

currentYear.innerText = new Date().getFullYear();


