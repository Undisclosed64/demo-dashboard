const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demo-dashboard-gray-three.vercel.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
