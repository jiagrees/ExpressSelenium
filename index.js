var chromedriver=require('chromedriver'); 

var webdriver = require('selenium-webdriver'); 
By = webdriver.By,
until = webdriver.until;
// var chromeCapabilities = webdriver.Capabilities.chrome();
// //setting chrome options to start the browser fully maximized
// var chromeOptions = {
//     'args': ['--user-data-dir', '--C:/Users/jiazhiw/AppData/Local/Google/Chrome/User Data']
// };
// chromeCapabilities.set('chromeOptions', chromeOptions);
// var driver = new webdriver.Builder().
//     withCapabilities(chromeCapabilities).
//     build();
//driver.get('http://baidu.com')

var driver = new webdriver.Builder().forBrowser('chrome').build();

//driver.get("https://autowebtest.github.io/");
driver.get('https://www.baidu.com');
driver.findElement(By.id('kw')).sendKeys('webdriver');
driver.findElement(By.id('su')).click();
driver.wait(until.titleIs('webdriver_百度搜索'), 30*1000);
driver.quit();
//driver.sleep(20 * 1000).then(function(){ 
//driver.quit();
//})
