#!/bin/bash

rm -r compiled/*

node js/bundle.js $1

sass -I ./css ./compiled/imports.scss:./compiled/compiled.css

rm compiled/imports.scss