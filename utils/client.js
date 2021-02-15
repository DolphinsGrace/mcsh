const path = require('path');
const { Client, Authenticator } = require('minecraft-launcher-core');
const MCSH_LIB = path.resolve(process.argv[1], '../../lib/mcsh')

module.exports = async function(username, password, version, memory) {
  try {
    const credentials = await Authenticator.getAuth(username, password);
    const { type } = await require('./version')(version);

    const launcher = new Client();

    launcher.on('debug', console.log);
    launcher.on('download', console.log);
    launcher.on('data', console.log);

    launcher.launch({
      authorization: credentials,
      memory: { min: memory, max: memory },
      root: MCSH_LIB,
      version: { number: version, type }
    });
  } catch (error) {
    throw error;
  }
}