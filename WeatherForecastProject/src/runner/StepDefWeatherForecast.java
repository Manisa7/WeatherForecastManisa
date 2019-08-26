package runner;

import java.io.File;

import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.eclipse.jetty.util.annotation.ManagedAttribute;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.WebDriverWait;

import PageObjects.WeatherForecastFunctions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class StepDefWeatherForecast {
	public static WebDriver driver;
	public static WebDriverWait wait ;
	
	

@Before
public static void beforeMethod()
{
	System.setProperty("webdriver.chrome.driver", "src\\drivers\\chromedriver.exe");
	driver= new ChromeDriver();
}

@Given("^The Weather Forecast application is launched$")
public static void the_Weather_Forecast_application_is_launched() throws InterruptedException, IOException
{
	driver.get("http://localhost:3000/");
	driver.manage().window().maximize();
	
	
}


@Then("^I enter the city name as \"([^\"]*)\" and press enter$")
public void i_enter_the_city_name_as_and_press_enter(String CityName) throws Throwable {
	
	WeatherForecastFunctions.EnterCityName(CityName);
}

@Then("^I verify that five day weather forecast is displayed$")
public void i_verify_that_five_day_weather_forecast_is_displayed() throws Throwable {

	WeatherForecastFunctions.VerifyFiveDayData();
}

@When("^I click on day \"([^\"]*)\"$")
public void i_click_on_day(String DayNum) throws Throwable {
	
	driver.findElement(By.xpath("//span[@data-test='day-"+DayNum+"']")).click();
	Thread.sleep(600);
}

@Then("^The three hourly forecast is \"([^\"]*)\" for day \"([^\"]*)\"$")
public void the_three_hourly_forecast_is(String DisplayCOndition,String DayNum) throws Throwable {

	WeatherForecastFunctions.checkThreehourDetails(DisplayCOndition, DayNum);
	Thread.sleep(600);
	
}

@Then("^I verify the day \"([^\"]*)\" summary weather condition is same as the first three hour data$")
public void i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String DayNum) throws Throwable {
    
	WeatherForecastFunctions.CheckWeatherConditionSummary(DayNum);
	
}

@Then("^I verify the day \"([^\"]*)\" summary wind speed and direction is same as the first three hour data$")
public void i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String DayNum) throws Throwable {
   
	WeatherForecastFunctions.checkWindspeedSummary(DayNum);
	
}

@Then("^I verify the day \"([^\"]*)\" maximum and minimum temperature summary is displayed correctly$")
public void i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String DayNum) throws Throwable {
   
	WeatherForecastFunctions.CheckMaxMinTemp(DayNum);
	
	
}

@Then("^I verify the day \"([^\"]*)\" rainfall summary is the aggregate three hour data$")
public void i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String DayNum) throws Throwable {
   
	WeatherForecastFunctions.checkRainfallSummary(DayNum);
	
}
@After
public  void afterClass(Scenario scenario){

	driver.quit();
	System.out.println(scenario.getName()+" : "+scenario.getStatus());
	
}


}
