const { Builder, By, until } = require("selenium-webdriver");
const fs = require("fs");

beforeAll(async () => {
  driver = await new Builder().forBrowser("chrome").build();
});

test("Wähle die Kategorie Science Fiction aus", async () => {
  await driver.get("http://books.toscrape.com/");

  const clickButton = await driver.findElement(
    By.xpath('//*[@id="default"]/div/div/div/aside/div[2]/ul/li/ul/li[15]/a')
  );
  await clickButton.click();

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
    fs.writeFileSync(
      "science_Fiction.json",
      JSON.stringify(allTitles, null, 2)
    );
  }
}, 30000);
test("Wähle die Kategorie Religion aus", async () => {
  await driver.get("http://books.toscrape.com/");

  const clickButton = await driver.findElement(
    By.xpath('//*[@id="default"]/div/div/div/aside/div[2]/ul/li/ul/li[11]/a')
  );
  await clickButton.click();

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
    fs.writeFileSync("Religion.json", JSON.stringify(allTitles, null, 2));
  }
});

test("Wähle die Kategorie Fantasy aus", async () => {
  await driver.get("http://books.toscrape.com/");

  const clickButton = await driver.findElement(
    By.xpath('//*[@id="default"]/div/div/div/aside/div[2]/ul/li/ul/li[18]/a')
  );
  await clickButton.click();

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
    fs.writeFileSync("Fantasy.json", JSON.stringify(allTitles, null, 2));
  }
});
