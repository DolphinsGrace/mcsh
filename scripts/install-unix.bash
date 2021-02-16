#!/bin/bash

if ! command -v node &> /dev/null
then
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
  export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  source ~/.bashrc
  nvm install node
fi

npm i git+https://github.com/DolphinsGrace/mcsh.git -g
source ~/.bashrc
