const { EnvironmentPlugin } = require("webpack");
require("dotenv").config();

module.exports = {
  webpack(config) {
    config.plugins.push(new EnvironmentPlugin(["BLOGGER_URL", "API_KEY"]));
    return config;
  }
};
