const puppeteer = require('puppeteer');

async function getSourceCode(url) {
  // Launch a headless browser
  const browser = await puppeteer.launch();

  // Open a new page
  const page = await browser.newPage();

  // Navigate to the provided URL
  await page.goto(url);

  // Get the source code of the page
  const sourceCode = await page.content();

  // Close the browser
  await browser.close();

  return sourceCode;
}

// Example usage
const url = 'https://example.com';
getSourceCode(url)
  .then(sourceCode => {
    console.log('Source Code:', sourceCode);
  })
  .catch(error => {
    console.error('Error:', error);
  });
