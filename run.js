#!/usr/bin/env node
const { program } = require('commander');

const options = program
  .option('-s, --server <spigot|native>', 'Spin up a minecraft server')
  .option('-v, --version <version>', 'Specify version for minecraft client or server')
  .option('-u, --username <username>', 'Specify username for minecraft client (Not needed for server)')
  .option('-m, --memory <memory>', 'Set the memory allocated to the process (Default: 2G)', '2G')
  .option('-p, --password <password>', 'Specify password for minecraft client (Not needed for server or client if offline)')
  .parse(process.argv)
  .opts();

if ('server' in options) {
  require('./utils/server')(options.server, options.version);
} else if ('version' in options && 'username' in options) {
  require('./utils/client')(options.username, options.password, options.version, options.memory);
}
