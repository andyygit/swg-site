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

token, refresh token gen salt: node: require('crypto').randomBytes(32).toString('hex')  
used bcrypt for password salt: node: let bcrypt = require('bcryptjs'), await bcrypt.genSalt(10)

> PORT  
> ACCESS_TOKEN_SALT  
> REFRESH_TOKEN_SALT  
> PASSWORD_SALT  
> MYSQL_HOST  
> MYSQL_USER  
> MYSQL_PASSWORD  
> MYSQL_DB

## fontend - tailwind

When building page and removing items from the page, tailwindcss does not recompile the css and the file keeps growing containing unused styles

> Therefore when html is ready, before last build delete the compiled css (dist.css) to be rebuilt

## liveserver server fronend

> "liveServer.settings.root": "/frontend"

## nginx

> must serve only index page, and redirect all path requests "/\*" to index page
> in the meantime must allow all api calls to proxy pass them

## cors

> in dev mode cors is enabled in index.mjs, and request numbers are doubled (cors get/post requests are preceded by OPTIONS requests)

      <a href="/" class="underline" data-link>Home</a>
      <a href="/login" class="underline" data-link>Log in</a>
      <a href="/register" class="underline" data-link>Register</a>
      <a href="/my-profile" class="underline" data-link>Profil</a>
      <a href="/inbox" class="underline" data-link>Mesaje</a>
      <a href="/favorites" class="underline" data-link>Favoriti</a>
      <a href="/help" class="underline" data-link>Ajutor</a>
      <a href="/premium" class="underline" data-link>Premium</a>

## server test

> ab - Apache HTTP server benchmarking tool  
> see video for commands
