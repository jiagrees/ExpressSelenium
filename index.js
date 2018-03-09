var chromedriver=require('chromedriver'); 
var webdriver = require('selenium-webdriver'); 
let config =require('./config.json');
By = webdriver.By,
until = webdriver.until;
var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get(config.Url);
driver.switchTo().frame('alibaba-login-box');
driver.findElement(By.id('fm-login-id')).sendKeys(config.username);
driver.findElement(By.id('fm-login-password')).sendKeys(config.password);
driver.findElement(By.id('fm-login-submit')).click();
driver.wait(until.elementLocated(By.linkText("管理产品")), 30*1000);
driver.findElement(By.linkText("管理产品")).click();

//driver.wait(until.titleIs('webdriver_百度搜索'), 30*1000);
//driver.quit();
//driver.sleep(20 * 1000).then(function(){ 
//driver.quit();
//})
