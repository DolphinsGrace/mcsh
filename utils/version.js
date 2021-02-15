const axios = require('axios').default;

module.exports = async function(version) {
  const { data: { versions } } = await axios.get('https://launchermeta.mojang.com/mc/game/version_manifest.json');
  return versions.find(v => v.id === version);
}