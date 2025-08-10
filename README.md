## swg-site

git config --global init.defaultBranch main  
git config --global user.email "crapu@example.com"  
git config --global user.name "crapu"  
git init  
git add -A  
git commit -m "Initial commit"  
add & commit one liner: git commit -am 'added stuff'  
git remote add origin https://github.com/andyygit/swg-site.git  
git branch -M main  
git push origin main  
subsequend pushes: git push  
git clone https://github.com/andyygit/swg-site.git .  
fetch changes from remote branch (online): git remote update -> git status -> git pull  
reset local branch to remote: git pull origin -> git reset --hard origin/main  
delete untracked files from working tree (force, recursive): git clean -f -d
discard local changes on file (restore): git restore src/css/dist.css

#### env vars

gen salt: node: require('crypto').randomBytes(32).toString('hex')

> PORT  
> ACCESS_TOKEN_SALT  
> REFRESH_TOKEN_SALT

## fontend - tailwind

When building page and removing items from the page, tailwindcss does not recompile the css and the file keeps growing containing unused styles

> Therefore when html is ready, before last build delete the compiled css (dist.css) to be rebuilt
