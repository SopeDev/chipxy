@echo off
setlocal enabledelayedexpansion

:: Create output folder
set "OUTPUT=resized"
if not exist "%OUTPUT%" mkdir "%OUTPUT%"

:: List of widths to resize to
set widths=1920

:: Resize all .jpg, .jpeg, .png files to each width
for %%f in (*.jpg *.jpeg *.png) do (
    set "filename=%%~nf"
    set "ext=%%~xf"
    
    for %%w in (%widths%) do (
        echo Resizing %%f to %%w px width...
        magick "%%f" -resize %%w "%OUTPUT%\!filename!_%%w!ext!"
    )
)

echo All done. Resized images are in "%OUTPUT%"
pause
