
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays cards', async () => {
    await driver.findElement(By.xpath('//button[@id="draw"]')).click();
    const cards = await driver.findElement(By.xpath('//div[@class="container"]'))

    const cardsDisplayed = cards.isDisplayed
    expect(cardsDisplayed).toBeTruthy();
})

test('Adding to duo', async () => {
    await driver.findElement(By.xpath('//button[@id="draw"]')).click();
    await driver.findElement(By.xpath('//button[@class="bot-btn"]')).click();
    const cardInDuo = await driver.findElement(By.xpath('//div[@class="bot-card outline"]'))

    const cardInDuoDisplayed = cardInDuo.isDisplayed
    expect(cardInDuoDisplayed).toBeTruthy();
})