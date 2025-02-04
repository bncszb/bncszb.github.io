preview: 
    bun run build
    bun run preview

deploy:
    git add build -f
    git commmit -m 'add build'
    git subtree push --prefix build origin gh-pages