@echo off
REM Create menu system directory structure
cd /d "C:\Users\Troy Fechser\Downloads\SLVRgdps-main\SLVRgdps-main\assets\scripts"

if not exist menus (
    mkdir menus
    echo Created menus directory
)

REM Create menu-system.css
echo /* Menu System Styling */ > menus\menu-system.css

REM Create menu-system.js  
echo // Menu System Controller > menus\menu-system.js

REM Create menu-system.html
echo ^<!-- Menu System HTML --> > menus\menu-system.html

echo Menu directory structure created!
