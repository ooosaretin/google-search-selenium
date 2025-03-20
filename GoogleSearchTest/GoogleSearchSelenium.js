const { Builder, By, Key, until } = require("selenium-webdriver");

async function google_search_test() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://ww.google.com");
    await driver.findElement(By.name('q')).sendKeys("Subaru Outback", Key.RETURN);
    await driver.wait(until.titleIs('Subaru Outback - Google Search'), 2000);
  } finally {
    await driver.quit();
  }

}

google_search_test();
