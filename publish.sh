#!/bin/bash
echo "hahahahahahahahahhahahaha";
git add .;
npm version patch ;
npm publish;
npm publish --registry=http://npm-registry.napos.io --cache=$HOME/.npm/.cache/nnpm --disturl=http://npm-registry.npdev.io/dist --userconfig=$HOME/.nnpmrc;

