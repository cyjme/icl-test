const puppeteer = require('puppeteer');

(async () => {
      const browser = await puppeteer.launch({headless: false, args: ['--disable-gpu', '--cast-initial-screen-width=6000', '--cast-initial-screen-height=6000'] });
      const page = await browser.newPage();
    page.setViewport({width: 1920, height:1080});
    await page.goto('https://www.ideapar.com');
//      await page.click('.sign-wrap a')

    //  await browser.close();

})();
