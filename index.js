'use strict';

const puppeteer = require('puppeteer');

(async() => {

    const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('http://www.udacity.com/courses/all');
const DOMstring = await page.content();

const cheerio = require('cheerio');
const $ = cheerio.load(DOMstring);


$('div[data-course-summaries] div[data-course-summary]').each(function () {
    var courseID = $(this).attr('id');
    var coursePublished = $('#'+courseID+' .col-sm-9 .row .col-sm-8 .h-slim .badges .badge').data('cloak') === "" ? "new" : "old";
    var courseName = $('#'+courseID+' .col-sm-9 .row .col-sm-8 .h-slim a').text().trim();
    if(coursePublished === "new") {
        console.log(courseID+' '+ courseName);
    }
})

await browser.close();

})();