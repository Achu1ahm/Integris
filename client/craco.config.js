import path from "path"

module.exports = {
  webpack: {
    alias: {
      "@app": path.resolve(__dirname, "src"),
    },
  },
};
