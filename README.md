🎙️ UNMUTED Podcast App (React Version)

A modern, modular React-based podcast application that displays a curated collection of podcasts in a responsive grid layout. Users can browse podcasts, view detailed states (loading, error, empty), and experience a clean, scalable architecture built with React best practices.

This project is an evolution of the original Vanilla JavaScript version, rebuilt using React for improved maintainability, reusability, and state management.

✨ Features
🎧 Dynamic Podcast Rendering

Podcasts rendered using reusable React components

Responsive grid layout

Clean card design

Formatted last updated dates

🏷️ Genre Display

Genres displayed directly on each podcast card

Genres also shown inside detailed views where applicable

🔄 State Handling (Professional UX)

The app handles different UI states using dedicated components:

LoadingState – Displays while podcast data is loading

ErrorState – Displays if something goes wrong

EmptyState – Displays when no podcasts match criteria

This ensures proper UX feedback at all times.

📱 Fully Responsive Layout

CSS Grid for layout structure

Flexible card resizing

Mobile-friendly design

🏗️ Project Structure
/src
│
├── components/
│   ├── EmptyState.jsx        # Displays when no data is available
│   ├── ErrorState.jsx        # Displays error messages
│   ├── LoadingState.jsx      # Displays loading indicator
│   ├── PodcastCard.jsx       # Individual podcast card component
│   ├── PodcastGrid.jsx       # Grid wrapper that maps podcasts
│
├── data/
│   ├── data.js               # Podcast dataset
│
├── hooks/
│   ├── usePodcasts.js        # Custom hook for podcast logic
│
├── utils/
│   ├── formatDate.js         # Date formatting utility
│
├── App.jsx                   # Main application component
├── main.jsx                  # React entry point
├── styles.css                # Global styling

🧠 Architecture & Design Principles
✅ Component-Based Architecture

Each UI section is broken into focused components:

Grid handles layout

Card handles display

State components handle UI feedback

✅ Custom Hook Abstraction

usePodcasts.js centralizes:

Data fetching or loading simulation

Error handling

State management

Filtering logic (if implemented)

This keeps App.jsx clean and readable.

✅ Utility Separation

formatDate.js isolates date formatting logic, keeping components free of formatting responsibilities.

✅ Single Responsibility Principle (SRP)

Each file has one clear purpose:

Components render UI

Hooks manage state logic

Utilities format data

Data folder contains static dataset

🛠️ Tech Stack

React (Functional Components)

React Hooks (useState, useEffect)

Custom Hooks

CSS Grid

ES6 Modules

▶️ How to Run the Project

Clone the repository:

git clone <repository-url>

Navigate into the project:

cd unmuted-podcast

Install dependencies:

npm install

Run development server:

npm run dev

Open browser:

http://localhost:5173
📌 Key React Concepts Demonstrated

Functional Components

Custom Hooks

Conditional Rendering

Dynamic .map() rendering

Component Composition

Derived UI States (Loading, Error, Empty)

Clean file separation

Reusable grid system

📈 Future Improvements

Advanced filtering (by genre & date)

Sorting functionality

Search functionality

Podcast detail modal

Audio playback feature

Backend API integration

Bookmark/favorites system

📚 Assignment Requirements Covered

✔ Modular Structure
✔ Custom Hook Usage
✔ Dynamic Rendering
✔ Clean UI States
✔ Utility Functions
✔ Responsive Design
✔ Maintainable Architecture

👩🏽‍💻 Author

Palesa Malatshi
Frontend Developer | React Developer
