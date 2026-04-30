# Menu System Setup Instructions

## Overview
The menu system has been organized into separate files for better maintainability. Below are the three files you need to create in the `assets/menus/` folder.

## Steps to Setup

1. **Create the menus folder:**
   - Create a new folder: `assets/menus/`

2. **Create the three menu files:**
   - Copy content from `MENU-SYSTEM-HTML.txt` → `assets/menus/menu-system.html`
   - Copy content from `MENU-SYSTEM-CSS.txt` → `assets/menus/menu-system.css`
   - Copy content from `MENU-SYSTEM-JS.txt` → `assets/menus/menu-system.js`

3. **Update index.html:**
   - The index.html has already been updated to reference these files:
     - `<link rel="stylesheet" href="assets/menus/menu-system.css">`
     - `<script src="assets/menus/menu-system.js"></script>`
     - Menu HTML is injected into the body via the JavaScript

## File Structure

```
assets/
├── menus/
│   ├── menu-system.html    (HTML structure for menus)
│   ├── menu-system.css     (Styling for all menus)
│   └── menu-system.js      (Menu functionality)
├── scripts/
├── sprites/
└── ...
```

## Menu System API

Once setup is complete, you can use the menu system in your game code:

```javascript
// Open search menu
window.menuSystem.openSearch((levelId) => {
  console.log('Loading level:', levelId);
});

// Open level select menu
window.menuSystem.openLevelSelect([
  { id: '1', name: 'Level 1' },
  { id: '2', name: 'Level 2' }
], (level) => {
  console.log('Selected:', level);
});

// Open featured menu
window.menuSystem.openFeatured([
  { name: 'Featured 1', description: 'A cool level', id: '100' },
  { name: 'Featured 2', description: 'Another cool level', id: '101' }
], (level) => {
  console.log('Playing:', level);
});

// Close any open menu
window.menuSystem.hide();

// Check if menu is open
if (window.menuSystem.isMenuOpen()) {
  console.log('Current menu:', window.menuSystem.getCurrentMenu());
}
```

## Menu Types

1. **Search Menu** - Allows players to search and load levels by ID
2. **Level Select Menu** - Shows a grid of available levels
3. **Featured Menu** - Displays featured/recommended levels

All menus feature:
- Game-themed styling (green #04FF00 and cyan #00FBFF)
- Smooth animations
- Responsive design
- Click-outside-to-close functionality
