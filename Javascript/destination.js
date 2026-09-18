console.log("Staynest Destination JavaScript activated");


// ==================================================
// DOM ELEMENTS
// ==================================================

const destinationSearchForm =
    document.querySelector("#destinationSearchForm");

const destinationSearchInput =
    document.querySelector("#destinationSearchInput");

const destinationNoResults =
    document.querySelector("#destinationNoResults");

const categoryButtons =
    document.querySelectorAll(".category-button");

const destinationCards =
    document.querySelectorAll(".popular-card");

const baliTemperature =
    document.querySelector("#baliTemperature");

const baliWeatherLabel =
    document.querySelector("#baliWeatherLabel");

const trendingTrack =
    document.querySelector(".trending-track");

const previousButton =
    document.querySelector(".carousel-arrow.previous");

const nextButton =
    document.querySelector(".carousel-arrow.next");

const newsletterForm =
    document.querySelector(".destination-newsletter");


// Navbar search

const navbarSearchButton =
    document.querySelector("#navbarSearchButton");

const navSearchBox =
    document.querySelector("#navSearchBox");

const navbarSearchInput =
    document.querySelector("#navbarSearchInput");

const navbarSearchClose =
    document.querySelector("#navbarSearchClose");


// ==================================================
// SEARCH MESSAGE
// ==================================================

function showMessage(message) {

    destinationNoResults.textContent = message;

    destinationNoResults.hidden = !message;

}


// ==================================================
// CATEGORY FILTER
// ==================================================

categoryButtons.forEach((button) => {

    button.addEventListener("click", () => {

        categoryButtons.forEach((btn) => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const selectedCategory =
            button.dataset.category;

        let matches = 0;


        destinationCards.forEach((card) => {

            const categories =
                card.dataset.category.split(" ");

            const isMatch =
                categories.includes(selectedCategory);


            card.hidden = !isMatch;


            if (isMatch) {
                matches++;
            }

        });


        showMessage(
            matches === 0
                ? "Sorry, no destinations found in this category."
                : ""
        );

    });

});


// ==================================================
// MAIN DESTINATION SEARCH
// ==================================================

destinationSearchForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const searchTerm =
            destinationSearchInput.value
                .trim()
                .toLowerCase();


        if (!searchTerm) {

            showMessage(
                "Please enter a destination."
            );

            return;

        }


        let matches = 0;


        categoryButtons.forEach((button) => {

            button.classList.remove("active");

        });


        destinationCards.forEach((card) => {

            const name =
                card.dataset.name.toLowerCase();

            const categories =
                card.dataset.category.toLowerCase();


            const isMatch =
                name.includes(searchTerm) ||
                categories.includes(searchTerm);


            card.hidden = !isMatch;


            if (isMatch) {
                matches++;
            }

        });


        showMessage(
            matches === 0
                ? `Sorry, "${destinationSearchInput.value.trim()}" was not found.`
                : ""
        );

    }
);


// ==================================================
// NAVBAR SEARCH
// ==================================================

navbarSearchButton.addEventListener(
    "click",
    () => {

        navSearchBox.classList.add("active");

        navbarSearchInput.focus();

    }
);


navbarSearchClose.addEventListener(
    "click",
    () => {

        navSearchBox.classList.remove("active");

        navbarSearchInput.value = "";

    }
);


// ==================================================
// SITE-WIDE SEARCH
// ==================================================

const siteSearch = {

    "bali": "destination.html#popularDestinations",
    "santorini": "destination.html#popularDestinations",
    "manali": "destination.html#popularDestinations",

    "tokyo": "destination.html#trendingDestinations",
    "swiss alps": "destination.html#trendingDestinations",
    "kyoto": "destination.html#trendingDestinations",
    "new york": "destination.html#trendingDestinations",
    "paris": "destination.html#trendingDestinations",
    "phuket": "destination.html#trendingDestinations",

    "oceanview villa": "stays.html",
    "snowpeak cottage": "stays.html",
    "jungle treehouse": "stays.html",
    "lagoon water villa": "stays.html",
    "skyline apartment": "stays.html",

    "sunrise volcano trek": "experience.html",
    "hidden lagoon kayaking": "experience.html",
    "traditional village night": "experience.html"

};


navbarSearchInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key !== "Enter") {
            return;
        }


        const searchTerm =
            navbarSearchInput.value
                .trim()
                .toLowerCase();


        const result =
            siteSearch[searchTerm];


        if (result) {

            window.location.href = result;

        }

        else {

            navSearchBox.classList.remove("active");

            showMessage(
                `Sorry, "${navbarSearchInput.value.trim()}" was not found on Staynest.`
            );

        }

    }
);


// ==================================================
// BALI LIVE WEATHER API
// ==================================================

async function loadBaliWeather() {

    const weatherUrl =
        "https://api.open-meteo.com/v1/forecast?latitude=-8.4095&longitude=115.1889&current=temperature_2m&timezone=Asia%2FMakassar";


    try {

        const response =
            await fetch(weatherUrl);

        const data =
            await response.json();


        const temperature =
            data.current.temperature_2m;


        baliTemperature.textContent =
            `${Math.round(temperature)}°C`;

        baliWeatherLabel.textContent =
            "Live Temperature";

    }

    catch (error) {

        console.error(
            "Weather API error:",
            error
        );


        baliTemperature.textContent =
            "Unavailable";

        baliWeatherLabel.textContent =
            "Weather unavailable";

    }

}


loadBaliWeather();


// ==================================================
// TRENDING CAROUSEL
// ==================================================

function scrollTrending(direction) {

    trendingTrack.scrollBy({

        left:
            direction *
            trendingTrack.clientWidth * 0.55,

        behavior: "smooth"

    });

}


previousButton.addEventListener(
    "click",
    () => {

        scrollTrending(-1);

    }
);


nextButton.addEventListener(
    "click",
    () => {

        scrollTrending(1);

    }
);


// ==================================================
// NEWSLETTER
// ==================================================

newsletterForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const emailInput =
            newsletterForm.querySelector(
                'input[type="email"]'
            );

        const button =
            newsletterForm.querySelector(
                "button"
            );


        if (!emailInput.value.trim()) {
            return;
        }


        button.textContent =
            "Subscribed";

        newsletterForm.reset();

    }
);
// ---------------- PLAN YOUR TRIP ----------------

const planTripButton = document.querySelector("#planTripButton");
const tripPlanner = document.querySelector("#tripPlanner");
const tripPlannerClose = document.querySelector("#tripPlannerClose");

const tripPlannerForm = document.querySelector("#tripPlannerForm");
const tripPlannerFormView = document.querySelector("#tripPlannerFormView");
const tripResult = document.querySelector("#tripResult");

const tripDestination = document.querySelector("#tripDestination");
const tripCheckIn = document.querySelector("#tripCheckIn");
const tripCheckOut = document.querySelector("#tripCheckOut");
const tripGuests = document.querySelector("#tripGuests");
const tripBudget = document.querySelector("#tripBudget");
const tripMood = document.querySelector("#tripMood");

const tripResultTitle = document.querySelector("#tripResultTitle");
const tripResultDates = document.querySelector("#tripResultDates");
const tripResultGuests = document.querySelector("#tripResultGuests");
const tripResultMood = document.querySelector("#tripResultMood");
const tripResultBudget = document.querySelector("#tripResultBudget");
const tripSuggestion = document.querySelector("#tripSuggestion");

const tripViewStays = document.querySelector("#tripViewStays");
const tripStartOver = document.querySelector("#tripStartOver");


// Open planner

planTripButton.addEventListener("click", () => {

    tripPlanner.classList.add("active");

    tripPlanner.setAttribute("aria-hidden", "false");

    document.body.classList.add("trip-planner-open");
});


// Close planner

tripPlannerClose.addEventListener("click", () => {

    tripPlanner.classList.remove("active");

    tripPlanner.setAttribute("aria-hidden", "true");

    document.body.classList.remove("trip-planner-open");
});


// Close by clicking outside the box

tripPlanner.addEventListener("click", (event) => {

    if (event.target === tripPlanner) {

        tripPlanner.classList.remove("active");

        tripPlanner.setAttribute("aria-hidden", "true");

        document.body.classList.remove("trip-planner-open");
    }
});


// Trip recommendations

const tripRecommendations = {

    Romantic:
        "Choose a peaceful stay with sunset views, slow dinners and a romantic local experience.",

    Adventure:
        "Look for stays close to outdoor activities, trekking routes and nature experiences.",

    Wellness:
        "A quiet stay surrounded by nature, spa experiences and slower mornings would suit this trip.",

    Culture:
        "Stay close to local neighbourhoods, markets, heritage sites and cultural experiences.",

    Food:
        "Choose a central stay near local restaurants, markets and food experiences.",

    Nature:
        "Look for peaceful stays near mountains, beaches, forests or scenic landscapes."
};


// Create trip

tripPlannerForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const destination = tripDestination.value;
    const checkIn = tripCheckIn.value;
    const checkOut = tripCheckOut.value;
    const guests = tripGuests.value;
    const budget = tripBudget.value;
    const mood = tripMood.value;

    if (!destination || !checkIn || !checkOut) {
        return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
        alert("Check-out must be after check-in.");
        return;
    }


    tripResultTitle.textContent =
        `${mood} Escape to ${destination}`;

    tripResultDates.textContent =
        `${checkIn} → ${checkOut}`;

    tripResultGuests.textContent =
        `${guests} Traveller${guests === "1" ? "" : "s"}`;

    tripResultMood.textContent = mood;

    tripResultBudget.textContent = budget;

    tripSuggestion.textContent =
        tripRecommendations[mood];


    // Send destination to Stays page

    tripViewStays.href =
        `stays.html?destination=${encodeURIComponent(destination)}`;


    tripPlannerFormView.hidden = true;

    tripResult.hidden = false;
});


// Change plan

tripStartOver.addEventListener("click", () => {

    tripResult.hidden = true;

    tripPlannerFormView.hidden = false;
});