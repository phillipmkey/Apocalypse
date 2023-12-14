@@ ECHO OFF
robocopy "c:\Users\pkey\OneDrive\Documents\Obsidian\TTRPG Player Notes" C:\Users\pkey\Downloads\quartz\content\ /MIR
git commit -a -m "Automated Commit"
npx quartz sync