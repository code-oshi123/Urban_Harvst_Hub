# 🌱 Urban Harvest Hub

A modern, responsive Single Page Application (SPA) for a sustainable lifestyle platform that connects eco-conscious communities with eco-friendly products, educational workshops, and local community events.

---

## 📋 Table of Contents
- [Project Overview](#-project-overview)
- [Technologies Used](#-technologies-used)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [OpenWeather API Setup](#-openweather-api-setup)
- [Available Pages](#-available-pages)
- [Components](#-components)
- [Accessibility Features](#-accessibility-features)
- [Browser Support](#-browser-support)
- [Troubleshooting](#-troubleshooting)
- [Credits](#-credits)
- [License](#-license)

---

# 🎯 Project Overview

Urban Harvest Hub is a sustainable lifestyle web platform designed to promote eco-friendly living by providing:

- 🌿 Eco-friendly products
- 📚 Educational workshops
- 🤝 Community events
- 🌤️ Real-time weather information
- 🌍 Multi-language support (English & Sinhala)
- 🌓 Dark/Light mode toggle

---

# 🛠 Technologies Used

## Frontend
- **React 18**
- **Vite**
- **React Router DOM**
- **Axios**
- **Tailwind CSS**

## Styling & Design
- Mobile-first responsive design
- Custom Tailwind colors:
  - `forest`: `#2E7D32`
  - `leaf`: `#81C784`
- Custom font: **Poppins**
- Dark mode support
- Smooth animations & transitions

## API Integration
- **OpenWeather API** for live weather data

---

# ✨ Features

### Core Features
✅ Full SPA using React Router  
✅ Browse products, workshops, and events  
✅ Search functionality  
✅ Category filtering  
✅ Sorting by price/date/availability  
✅ Master-detail pages  
✅ Booking system  
✅ Live weather display  

### User Experience
✅ Dark mode toggle  
✅ Multi-language support  
✅ Fully responsive design  
✅ Loading states  
✅ Error handling  
✅ Form validation  
✅ Keyboard navigation  

### Data Management
✅ JSON data storage  
✅ API integration  
✅ React Context API  
✅ LocalStorage support  

---

# 📁 Project Structure

```bash
urban-harvest-hub/
│── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── data/
│   │   ├── services/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
```

---

# 🚀 Installation & Setup

## Prerequisites
Make sure you have installed:

- Node.js (v16+)
- npm (v7+)

---

## 1. Clone Repository

```bash
git clone https://github.com/code-oshi123/Urban_Harvst_Hub.git
cd Urban_Harvst_Hub
```

---

## 2. Install Dependencies

```bash
cd client
npm install
```

---

## 3. Run Development Server

```bash
npm run dev
```

App runs at:

```text
http://localhost:5173
```

---

## 4. Build for Production

```bash
npm run build
```

---

## 5. Preview Production Build

```bash
npm run preview
```

---

# 🌤 OpenWeather API Setup

This app uses **OpenWeatherMap API**.

### Step 1:
Create free account at:

[OpenWeatherMap](https://openweathermap.org/?utm_source=chatgpt.com)

---

### Step 2:
Get API key:

[API Keys Page](https://home.openweathermap.org/api_keys?utm_source=chatgpt.com)

---

### Step 3:
Open:

```bash
client/src/services/weatherApi.js
```

Replace:

```javascript
const API_KEY = "YOUR_API_KEY_HERE";
```

with:

```javascript
const API_KEY = "your_actual_api_key";
```

---

### Step 4:
Restart app:

```bash
npm run dev
```

---

# 📄 Available Pages

| Page | Route |
|------|-------|
| Home | `/` |
| Products | `/products` |
| Product Details | `/products/:id` |
| Workshops | `/workshops` |
| Workshop Details | `/workshops/:id` |
| Events | `/events` |
| Event Details | `/events/:id` |
| Booking | `/booking` |
| About | `/about` |
| 404 | `*` |

---

# 🧩 Components

Reusable components include:

- Navbar
- Footer
- HeroBanner
- ProductCard
- WorkshopCard
- EventCard
- SearchBar
- CategoryFilter
- BookingForm
- WeatherWidget
- LoadingSpinner
- ErrorMessage
- DarkModeToggle
- LanguageSwitcher

---

# ♿ Accessibility Features

This project follows **WCAG 2.1 AA** standards:

✅ Semantic HTML  
✅ ARIA labels  
✅ Keyboard navigation  
✅ Focus indicators  
✅ Proper color contrast  
✅ Alt text on images  
✅ Accessible forms  

---

# 🌐 Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome | ✅ |
| Firefox | ✅ |
| Safari | ✅ |
| Edge | ✅ |
| Mobile Browsers | ✅ |

---

# 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| Weather not showing | Check API key |
| Styles missing | Restart Vite |
| Routing issues | Verify BrowserRouter |
| Dark mode not saving | Check localStorage |
| Images not loading | Check internet |

---

# 📚 Credits

### Images
- [Unsplash](https://unsplash.com/?utm_source=chatgpt.com)

### API
- [OpenWeatherMap](https://openweathermap.org/?utm_source=chatgpt.com)

### Fonts
- [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins?utm_source=chatgpt.com)

### Frameworks
- [React](https://react.dev/?utm_source=chatgpt.com)
- [Tailwind CSS](https://tailwindcss.com/?utm_source=chatgpt.com)
- [Vite](https://vitejs.dev/?utm_source=chatgpt.com)

---

# 📄 License

This project was created for **educational purposes** as part of a university Web Development assignment.

---

# 👩‍💻 Author

**Ushani Perera CB014599**  
University Of APIIT Web Development Assignment

---



