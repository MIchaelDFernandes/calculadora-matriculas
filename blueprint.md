
# Blueprint: Matrículas em 2025 UI

This document outlines the plan for creating a web-based UI to determine the correct school grade for a student in 2025 based on their birth date.

## 1. Project Overview

The goal is to recreate the provided UI using modern, framework-less web standards (HTML, CSS, JavaScript). The application will allow a user to pick a date of birth and will display the corresponding school grade for the year 2025.

**Core Features:**
- A simple, clean UI based on the provided image.
- A date picker for selecting the date of birth.
- Logic to calculate the correct school grade based on the selected date.
- Display the result to the user.

## 2. Design and Style (Visual Plan)

The application will adhere to the following design principles:

*   **Layout:** A single-column, centered layout that is responsive.
*   **Color Palette:**
    *   Background: A light, off-white/beige color (`#f7f6f4`).
    *   Text: Black (`#000000`).
    *   Button: Black background (`#000000`) with white text (`#ffffff`).
*   **Typography:** A clean, sans-serif font (e.g., Arial, Helvetica).
    *   Main Title (`h1`): Large and bold.
    *   Subtitle (`p`): Smaller than the title.
*   **Components:**
    *   **Date Button:** A prominent button with a calendar icon.
    *   **Result Display:** A simple bordered box to show the calculated grade.
    *   **Info Icon:** A small informational icon.

## 3. Implementation Plan (Phase 1: UI)

This is the plan for the initial implementation of the user interface.

### Step 1: HTML (`index.html`)

*   Create the basic page structure.
*   Add a `div` to act as the main container for the content.
*   Add an `h1` element for the title: "Matrículas em 2025".
*   Add a `p` element for the subtitle.
*   Add a `button` element that will trigger the date picker. This button will contain a calendar icon (SVG) and the text "Escolha uma data".
*   Add an invisible `<input type="date">` that will be programmatically opened.
*   Add a `div` to display the result.
*   Add a small `div` or `span` for the info icon.

### Step 2: CSS (`style.css`)

*   Apply a general reset to ensure consistent styling.
*   Style the `body` to center the content on the page.
*   Define styles for the main container, title, and subtitle.
*   Style the date picker button to match the design (black, rounded corners).
*   Style the result display box.
*   Style the info icon.
*   Ensure the layout is responsive and looks good on mobile devices.

### Step 3: JavaScript (`main.js`)

*   Add an event listener to the "Escolha uma data" button.
*   When the button is clicked, trigger a click on the hidden `<input type="date">`.
*   Add an event listener to the date input to detect when the user selects a date.
*   Implement the `calculateGrade(birthDate)` function. This function will contain the logic for determining the school grade based on the age of the person on March 31, 2025.
*   Update the result `div` with the calculated grade.
