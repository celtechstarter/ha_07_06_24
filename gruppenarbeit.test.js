const { Builder, By, until } = require("selenium-webdriver");
const fs = require("fs");

beforeAll(async () => {
  driver = await new Builder().forBrowser("chrome").build();
});

test.skip("test scrapen von books.toscrape", async () => {
  await driver.get("http://books.toscrape.com");

  let books = await driver.findElements(By.css(".product_pod"));
  expect(books.length).toBeGreaterThan(0);

  let allTitles = [];
  for (let book of books) {
    let titleElement = await book.findElement(By.css("h3 a"));
    let title = await titleElement.getText();
    let link = await titleElement.getAttribute("href");

    //Hier Suchen wir den Preis
    let priceElement = await book.findElement(By.css(".price_color"));
    let price = await priceElement.getText();

    //Hier suchen wir ob das Buch "in stock" ist
    let instockElement = await book.findElement(
      By.className("instock availability ")
    );
    let instock = await instockElement.getText();

    allTitles.push({ title, link, price, instock });
    fs.writeFileSync("news.json", JSON.stringify(allTitles, null, 2));
  }
}, 30000);
