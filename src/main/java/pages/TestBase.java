package pages;


import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBase {
	
	public static WebDriver driver;
	
	public static void initDriver() {
		//inialising the driver
		System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
		driver = new ChromeDriver();
		//TestBase tbobj = new TestBase();
		// driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		//driver.get("https://techfios.com/billing/?ng=login/");
	}
	
	public void takeScreenshot(WebDriver driver) throws IOException {
		TakesScreenshot ts = (TakesScreenshot)driver;//creating reference variable //driver we typecasting
		File sourceFile  = ts.getScreenshotAs(OutputType.FILE);//its source file
		
		SimpleDateFormat formatter = new SimpleDateFormat("MMddyy_HHmss");//how do we want our date formate 
		Date date = new Date();
		String lable = formatter.format(date);
		
		
		String currentDiractery = System.getProperty("user.dir");
        FileUtils.copyFile(sourceFile, new File(currentDiractery + "/screenshot/" + lable + ".png"));//screenshot is folders name
	}
	
	public static int generateRandomNumber(int boundaryNumber) {
		Random random = new Random();
		return random.nextInt(boundaryNumber);

	}
}