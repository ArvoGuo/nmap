#!/bin/bash
echo "hahahahahahahahahhahahaha";
npm version patch ;
npm publish;
npm --registry=http://npm-registry.napos.io\
  --cache=$HOME/.npm/.cache/nnpm \
  --disturl=http://npm-registry.npdev.io/dist \
  --userconfig=$HOME/.nnpmrc;

