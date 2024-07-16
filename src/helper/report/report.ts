const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Cucumber + Playwrite Automation Report",
    pageTitle: "Cucumber + Playwrite UI Test Report ",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "112",
        },
        device: "NT",
        platform: {
            name: "Mac",
            version: "14",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Cucumber + Playwrite" },
            { label: "Release", value: "Version ?" },
            { label: "Cycle", value: "Regression" }
        ],
    },
});