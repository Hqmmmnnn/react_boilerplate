const path = require("path");

const getResolve = () => ({
  alias: {
    "@ui": path.resolve(__dirname, "..", "src/ui"),
    "@features": path.resolve(__dirname, "..", "src/features")
  },
  extensions: [".js"],
  modules: [
    path.resolve(__dirname, "..", "src"),
    path.resolve(__dirname, "..", "node_modules")
  ]
});

module.exports.getResolve = getResolve;
