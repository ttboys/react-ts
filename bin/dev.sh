#!/usr/bin/env bash

export PATH="$PATH:./node_modules/.bin"

if [ -f './node_modules' ]; then
  yarn install
fi

# initialize config here
export CONFIG_SERVICE_USER=${CONFIG_SERVICE_USER:-"http://localhost:3001"}

# run webpack here
webpack-dev-server --progress
