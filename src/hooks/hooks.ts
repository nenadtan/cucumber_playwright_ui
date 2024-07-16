import { BeforeAll, AfterAll, Before, After, Status,AfterStep, setDefaultTimeout } from "@cucumber/cucumber";
import { test, expect, Page, Browser, BrowserContext } from "@playwright/test";
import { fixture } from "./hooksFixture";
import { createObjectModelPages } from "./pageInstances";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";
const fs = require("fs-extra");

let browser: Browser;
let context: BrowserContext;

setDefaultTimeout(20*1000)

BeforeAll(async function () {
    getEnv();
    browser = await invokeBrowser();
});

// It will trigger for not auth scenarios
Before( async function ({ pickle }) {
    const scenarioName = pickle.name + pickle.id
    context = await browser.newContext({
        recordVideo: {
            dir: "test-results/videos",
        },
    });
    await context.tracing.start({
        name: scenarioName,
        title: pickle.name,
        sources: true,
        screenshots: true, snapshots: true
    });
    const page = await context.newPage();
    await createObjectModelPages(page)
    fixture.page = page;
    fixture.logger = createLogger(options(scenarioName));
});


// It will trigger for auth scenarios


After(async function ({ pickle, result }) {
    let videoPath: string;
    let img: Buffer;
    const path = `./test-results/trace/${pickle.id}.zip`;
    if (result?.status !== Status.PASSED) {
        img = await fixture.page.screenshot(
            { path: `./test-results/screenshots/${pickle.name}.png`, type: "png" })
        videoPath = await fixture.page.video().path();
    }
    await context.tracing.stop({ path: path });
    await fixture.page.close();
    await context.close();
    if (result?.status !== Status.PASSED) {
        await this.attach(
            img, "image/png"
        );
        await this.attach(
            fs.readFileSync(videoPath),
            'video/webm'
        );
        const traceFileLink = `<a href="https://trace.playwright.dev/">Open ${path}</a>`
        await this.attach(`Trace file: ${traceFileLink}`, 'text/html');

    }

});


// ---Export instances---
export { context, test, expect, browser };
