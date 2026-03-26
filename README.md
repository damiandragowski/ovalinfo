# OvalInfo Premium SPA

## Run
npm install
npm run dev

## Build
npm run build

## Deploy (GitHub Pages)
npm install gh-pages --save-dev

Add to package.json:
"homepage": "https://<user>.github.io/ovalinfo"

npm run deploy

One Liner:

git add -A && git commit -m "your message" && git push origin main && npm run deploy

cd /home/__/src/github/ovalinfo && \
git checkout gh-pages && \
git rm -rf . --quiet && \
cp -r dist/. . && \
rm -rf dist && \
git add -A && \
git commit -m "Deploy: colored oval O with 3D tilt" && \

git checkout main && \
DIST=$(pwd)/dist && \
cd /tmp && \
rm -rf gh-deploy && \
mkdir gh-deploy && \
cp -r $DIST/. gh-deploy/ && \
cd gh-deploy && \
git init && \
git checkout -b gh-pages && \
git add -A && \
git commit -m "Deploy: O-colored oval O with 3D tilt" && \
git remote add origin git@github.com:damiandragowski/ovalinfo.git && \
git push origin gh-pages --force