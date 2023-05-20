#!/bin/bash

inotifywait -r -m src -e modify |
    while read -r src event file; do
        sh cli/build.sh $1
    done