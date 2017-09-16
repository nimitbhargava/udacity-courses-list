'use strict';

const puppeteer = require('puppeteer');

(async() => {

    const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('http://www.udacity.com/courses/all');
const DOMstring = await page.content();

await browser.close();

})();