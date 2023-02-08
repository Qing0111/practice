#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://Qing0111.github.io
# git push -f git@github.com:Qing0111/Qing0111.github.io.git main

# if you are deploying to https://Qing0111.github.io/vite-practice
git push -f git@github.com:Qing0111/vite-practice.git main:gh-pages
# git remote set-url origin https://github.com/Qing0111/vite-practice.git
cd -