function main(config, profileName) {
  return config;
}
const prependRules = [
  // lan ip
  "DOMAIN,steamcdn-a.akamaihd.net,DIRECT",
  "DOMAIN-SUFFIX,cm.steampowered.com,DIRECT",
  "DOMAIN-SUFFIX,steamserver.net,DIRECT",
  "DOMAIN-SUFFIX,steamcontent.com,DIRECT"
];

function main(config, profileName) {
  config.rules = prependRules.concat(config.rules);
  return config;
}
