# Project Blueprint: School Enrollment Calculator

## 1. Overview

An interactive web application that calculates the correct school grade for a child in the year 2026 based on their date of birth. The application provides a simple and intuitive interface for users to select a birth month and year and instantly see the result.

## 2. Design and Features

### Current Style (Dark Theme)

*   **Layout:** A single-column, centered layout that is responsive and optimized for both mobile and desktop screens.
*   **Color Palette:**
    *   Background: A dark, modern background color (`#2c2c3a`).
    *   Text: A light, readable color (`#f0f0f0`).
    *   Accent: A reddish-pink color (`#d96666`) used for borders, labels, and the primary button.
*   **Typography:** A clean, sans-serif font (system default).
    *   Main Title (`h1`): Large and bold.
    *   Subtitle (`p`): Smaller than the title.
*   **Components:**
    *   **Date Form:** A styled form block containing month and year select dropdowns and a "Confirmar" button.
        *   **Inputs (`select`):** Dark background with an accent-colored border.
        *   **Button:** Solid accent color background with uppercase, bold white text.
    *   **Result Display:** A bordered box with an accent color to display the calculated grade.
    *   **Info Icon:** A small informational icon.

## 3. Current Task: Fix Styling Issues

### Plan

1.  **Diagnose:** The new dark theme styles are not being applied in the browser.
2.  **Hypothesis:** This is likely a browser caching issue, where the old stylesheet is being served instead of the updated one.
3.  **Solution:** Force the browser to reload the stylesheet by adding a version query string to the `<link>` tag in `index.html`. For example: `<link rel="stylesheet" href="style.css?v=1.1">`.
4.  **Update Blueprint:** Ensure the `blueprint.md` file is updated to reflect the current dark theme design. (This step)
