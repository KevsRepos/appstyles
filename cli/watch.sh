#!/bin/bash

inotifywait -r -m css -e modify |
    while read -r css event file; do
        sh cli/build.sh $1
    done