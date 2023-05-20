#!/bin/bash

if [[ $1 != "--name" || -z $2 ]]; then
    echo "Error: no name specified"
    exit
fi

mkdir src/app-$2
cd src/app-$2
touch index.html
touch ios-app-$2.scss
touch md-app-$2.scss

echo "<link rel=\"stylesheet\" href=\"/compiled/compiled.css\" />" > index.html