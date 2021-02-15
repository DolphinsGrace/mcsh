#!/bin/bash

if ! command -v node &> /dev/null
then
  sudo apt install nodejs
fi

npm i git+https://github.com/DolphinsGrace/mcsh.git -g
