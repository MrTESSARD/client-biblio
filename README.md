# client-biblio

# Migration remote TESSARD -> MrTESSARD
git remote set-url origin https://github.com/MrTESSARD/xxx
git config user.name "MrTESSARD"
git config credential.username "MrTESSARD"

git init 
git add --all
git commit -m "Migration remote TESSARD -> MrTESSARD"
git push -f origin main