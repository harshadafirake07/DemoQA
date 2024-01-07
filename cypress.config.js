const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "njhk46",
  reporter: 'mochawesome',
  env:{
    url : "https://demoqa.com/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/*.cy.js",
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/video',
    video: true
  },
});
