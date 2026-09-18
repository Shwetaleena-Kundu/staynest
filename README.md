# Staynest

A responsive multi-page travel and accommodation website designed to help travellers discover memorable stays, destinations, and local experiences.

Staynest combines visual storytelling with practical browsing features such as search, category filtering, sorting, wishlists, carousels, and responsive navigation. The project also includes an introductory Express backend that demonstrates basic routes and a JSON API response.

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Homepage with video hero, featured stays, offers, destination spotlight, experiences, traveller moments, inspiration, and newsletter |
| `stays.html` | Searchable and filterable accommodation catalogue |
| `destination.html` | Destination discovery with categories, search, featured content, and destination information |
| `experience.html` | Curated travel experiences and traveller stories |
| `about.html` | Brand story, achievements, sustainability, press, FAQ, and contact information |

## Features

### Homepage

- Full-width background video hero
- Video play and pause control
- Featured accommodation cards
- Special-offer banner
- Bali destination spotlight
- Experience carousel
- Traveller moments gallery
- Travel inspiration section
- Newsletter validation
- Responsive navigation and search panel

### Stays

- Search by stay name or location
- Filter stays by category
- Sort accommodation results
- Load-more functionality
- Wishlist interactions
- Browser-based wishlist persistence with localStorage
- Responsive accommodation grid

### Destinations

- Destination search
- Category-based filtering
- Interactive carousel
- Bali information and weather-style presentation
- Newsletter interaction
- Mobile-friendly layout

### Experiences

- Featured experience slider
- Curated cultural, adventure, food, and local activities
- Traveller-story presentation
- Search panel
- Wishlist interactions

### About

- Brand story and purpose
- Achievement statistics
- Sustainability section
- Press section
- Frequently asked questions
- Contact section
- Mobile menu behavior

## Built With

### Frontend

- HTML5
- CSS3
- Vanilla JavaScript
- Bootstrap
- Font Awesome
- localStorage
- Responsive media queries

### Backend Introduction

- Node.js
- Express.js
- CommonJS
- JSON API response

## Project Structure

```text
staynest/
├── Backend/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── Css/
│   ├── style.css
│   ├── responsive.css
│   ├── stays.css
│   ├── destination.css
│   ├── experience.css
│   └── about.css
├── Javascript/
│   ├── main.js
│   ├── stays.js
│   ├── destination.js
│   ├── experience.js
│   └── about.js
├── images/
├── index.html
├── stays.html
├── destination.html
├── experience.html
└── about.html
```

## Run the Frontend Locally

Clone the repository:

```bash
git clone https://github.com/Shwetaleena-Kundu/staynest.git
cd staynest
```

Open `index.html` directly in a browser or use the VS Code Live Server extension.

## Run the Express Backend

```bash
cd Backend
npm install
npm start
```

The server runs at:

```text
http://localhost:5000
```

Available routes:

| Route | Response |
| --- | --- |
| `GET /` | Backend welcome message |
| `GET /stays` | Stays message |
| `GET /api/stays` | Sample JSON for Oceanview Villa |

Example API response:

```json
{
  "name": "Oceanview Villa",
  "location": "Bali",
  "price": 250
}
```

## What I Learned

Building Staynest helped me practise:

- Planning and developing a consistent multi-page website
- Structuring large HTML pages with semantic sections
- Creating page-specific and shared responsive CSS
- Building search, filtering, sorting, and load-more interactions
- Using arrays, DOM manipulation, and event listeners
- Saving wishlist selections with localStorage
- Creating sliders and interactive navigation
- Validating newsletter forms
- Working with responsive layouts across desktop, tablet, and mobile
- Understanding basic Node.js and Express routing
- Returning JSON from a simple API endpoint
- Organizing a larger project into assets, styles, scripts, pages, and backend folders

## Current Scope

Staynest is primarily a frontend portfolio project. Its accommodation, destination, and experience content is curated locally. Wishlist data is stored in the browser, and the included Express server is an introductory backend demonstration rather than a production booking system.

## Planned Improvements

- Connect frontend stay cards to the Express API
- Store stays and users in a database
- Add secure registration and login
- Add booking and availability workflows
- Add real destination and weather APIs
- Create an admin panel for managing stays
- Add payment integration
- Improve image optimization and loading performance
- Add automated accessibility and browser testing

## Why This Project Matters

Staynest demonstrates the ability to design and build a visually rich, responsive website across multiple connected pages. It goes beyond static layouts by including real interface behavior, reusable navigation patterns, client-side persistence, search and filtering logic, and an introductory backend API.

## Author

**Shwetaleena Kundu**

- GitHub: [@Shwetaleena-Kundu](https://github.com/Shwetaleena-Kundu)
