'use strict';

const puppeteer = require('puppeteer');

(async() => {

    const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('http://www.udacity.com/courses/all');
const DOMstring = await page.content();

const cheerio = require('cheerio');
const $ = cheerio.load(DOMstring);

var courses = [];

$('div[div[data-course-summaries] div[data-course-summary]').each(function () {
    var id = $(this).attr('id');
    console.log(id);
})

await browser.close();

})();