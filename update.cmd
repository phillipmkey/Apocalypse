@@ ECHO OFF
REM xcopy "C:\Users\pkey\OneDrive\Documents\Obsidian\TTRPG Player Notes\*" C:\Users\pkey\Downloads\quartz\content\ /E/H/C/Y
robocopy "C:\Users\pkey\OneDrive\Documents\Obsidian\TTRPG Player Notes\" "C:\Users\pkey\Downloads\quartz\content\" /MIR
git commit -a -m "Automated Commit"
npx quartz sync