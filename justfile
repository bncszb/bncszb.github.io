preview: 
    bun run build
    bun run preview

deploy:
    git add build -f
    git commit -m 'add build'
    git subtree push --prefix build origin gh-pages

publish:
    git add build -f
    git commit -m 'add build'
    git push
