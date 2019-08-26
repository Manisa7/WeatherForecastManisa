package PageObjects;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import junit.framework.Assert;
import runner.StepDefWeatherForecast;

public class WeatherForecastFunctions {

	public static WebDriver driver;
	public static int totalRows;
	public static WebDriverWait wait ;
	public static TakesScreenshot screenshot;
	File src ;
	
	@FindBy(how=How.ID, using="city")
	public static WebElement CityInputField;
	
	public static void EnterCityName(String CityName)
	{
		driver=StepDefWeatherForecast.driver;
		wait=new WebDriverWait(driver, 10);
		PageFactory.initElements(driver, WeatherForecastFunctions.class);
		wait.until(ExpectedConditions.elementToBeClickable(CityInputField));
		CityInputField.clear();
		CityInputField.sendKeys(CityName);
		CityInputField.sendKeys(Keys.ENTER);
		
	}
	
	public static void VerifyFiveDayData()
	{
		int DayRows = driver.findElements(By.xpath("//div[@class='summary']")).size();
		Assert.assertTrue(DayRows==5);
	}
	
	public static void checkThreehourDetails(String DisplayCOndition,String DayNum)
	{
		String Xpath= "//span[@data-test='day-"+DayNum+"']/../../following-sibling::div[@class='details']";
		
		if (DisplayCOndition.toLowerCase().equals("displayed")) {
			
			Assert.assertTrue(driver.findElement(By.xpath(Xpath)).isDisplayed());
			
		} else {
			Assert.assertFalse(driver.findElement(By.xpath(Xpath)).isDisplayed());
		}
		
	}
	
	public static void CheckWeatherConditionSummary(String DayNum)
	{
		String Xpath = "//span[@data-test='day-"+DayNum+"']/../../following-sibling::div[@class='details']/div[1]/span[2]//*[name()='svg']";
		String firstCondition = driver.findElement(By.xpath(Xpath)).getAttribute("aria-label");
		
		String XpathforSummary = "//span[@data-test='day-"+DayNum+"']/../../span[2]//*[name()='svg']";
		
		String SummaryCondition = driver.findElement(By.xpath(XpathforSummary)).getAttribute("aria-label");
		
		Assert.assertEquals(firstCondition, SummaryCondition);
	}
	
	public static void checkWindspeedSummary(String DayNum)
	{
		String SummaryWindXpath = "//span[@data-test='speed-"+DayNum+"']";
		String summarywindspeed = driver.findElement(By.xpath(SummaryWindXpath)).getText();
		
		String firstthreehourWindspeedxpath = "//span[@data-test='speed-"+DayNum+"-1']";
		String firstthreehourWindspeed = driver.findElement(By.xpath(firstthreehourWindspeedxpath)).getText();
		Assert.assertEquals(summarywindspeed, firstthreehourWindspeed);
		
		String DirSummaryXpath = "//span[@data-test='direction-"+DayNum+"']/*";
		String DirSummaryStyle = driver.findElement(By.xpath(DirSummaryXpath)).getAttribute("style");
		
		String firstthreehourDirxpath = "//span[@data-test='direction-"+DayNum+"-1']/*";
		String firstthreehourDirVal = driver.findElement(By.xpath(firstthreehourDirxpath)).getAttribute("style");
		Assert.assertEquals(DirSummaryStyle, firstthreehourDirVal);

	}
	
	public static void CheckMaxMinTemp(String DayNum)
	{
		int MaxTempSummary = Integer.valueOf(driver.findElement(By.xpath("//span[@data-test='maximum-"+DayNum+"']")).getText().replace("°", ""));
		int MinTempSummary = Integer.valueOf(driver.findElement(By.xpath("//span[@data-test='minimum-"+DayNum+"']")).getText().replace("°", ""));
		
		
		totalRows = driver.findElements(By.xpath("//div[@class='detail']/span[3]/span[contains(@data-test,'maximum-"+DayNum+"')]")).size();
		
		int CurrentMax;
		int Maxthreehour=0;
		
		int CurrentMin;
		int Minthreehour=1000;
		
		System.out.println("Total 3 hour Data is :="+ totalRows);
		
		for(int i=1;i<totalRows+1;i++)
		{
			System.out.println("Loop is executing");
			CurrentMax = Integer.valueOf(driver.findElement(By.xpath("(//div[@class='detail']/span[3]/span[contains(@data-test,'maximum-"+DayNum+"')])["+i+"]")).getText().replace("°", ""));
			System.out.println("Current Maximum is:"+CurrentMax);
			if (CurrentMax>Maxthreehour) {
				Maxthreehour = CurrentMax;
				System.out.println("Maximum of three hour is set as:"+CurrentMax);
			}
			
			CurrentMin = Integer.valueOf(driver.findElement(By.xpath("(//div[@class='detail']/span[3]/span[contains(@data-test,'minimum-"+DayNum+"')])["+i+"]")).getText().replace("°", ""));
			if (CurrentMin<Minthreehour) {
				Minthreehour = CurrentMin;
			}
		}
		
		System.out.println("In three hours maximum temperature is:"+Maxthreehour);
		System.out.println("Summary of maximum temp is: "+MaxTempSummary);
		
		Assert.assertEquals(Maxthreehour, MaxTempSummary);
		
		System.out.println("In three hours minimum temperature is: "+Minthreehour);
		System.out.println("Summary of minimum temp is:"+MinTempSummary);
		Assert.assertEquals(Minthreehour, MinTempSummary);

	}
	
	public static void checkRainfallSummary(String DayNum) throws IOException
	{
		String rainfallSummaryVal = driver.findElement(By.xpath("//span[@data-test='rainfall-"+DayNum+"']")).getText();
		
		int threehourRanfalltotal=0;
		
		for(int i=1;i<totalRows+1;i++)
		{
			threehourRanfalltotal = threehourRanfalltotal + Integer.valueOf(driver.findElement(By.xpath("(//div[@class='detail']/span[5]/span[contains(@data-test,'rainfall-"+DayNum+"')])["+i+"]")).getText().replace("mm", ""));
		}
		
		Assert.assertEquals(rainfallSummaryVal,threehourRanfalltotal+"mm");
		
		
	}
	
	
	
}
