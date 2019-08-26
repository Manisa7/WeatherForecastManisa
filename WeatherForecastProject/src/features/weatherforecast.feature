Feature: Weather forecast Testing

Background: Open weather forecast application 
	Given The Weather Forecast application is launched 
	
	
Scenario Outline: Verify weather forecast for different cities 
	Then I enter the city name as "<CityName>" and press enter 
	Then I verify that five day weather forecast is displayed 
	When I click on day "1" 
	Then The three hourly forecast is "Displayed" for day "1" 
	Then I verify the day "1" summary weather condition is same as the first three hour data 
	Then I verify the day "1" summary wind speed and direction is same as the first three hour data 
	Then I verify the day "1" maximum and minimum temperature summary is displayed correctly 
	Then I verify the day "1" rainfall summary is the aggregate three hour data 
	When I click on day "1" 
	Then The three hourly forecast is "Not Displayed" for day "1" 
	When I click on day "2" 
	Then The three hourly forecast is "Displayed" for day "2" 
	Then I verify the day "2" summary weather condition is same as the first three hour data 
	Then I verify the day "2" summary wind speed and direction is same as the first three hour data 
	Then I verify the day "2" maximum and minimum temperature summary is displayed correctly 
	Then I verify the day "2" rainfall summary is the aggregate three hour data 
	When I click on day "2" 
	Then The three hourly forecast is "Not Displayed" for day "2" 
	When I click on day "3" 
	Then The three hourly forecast is "Displayed" for day "3" 
	Then I verify the day "3" summary weather condition is same as the first three hour data 
	Then I verify the day "3" summary wind speed and direction is same as the first three hour data 
	Then I verify the day "3" maximum and minimum temperature summary is displayed correctly 
	Then I verify the day "3" rainfall summary is the aggregate three hour data 
	When I click on day "3" 
	Then The three hourly forecast is "Not Displayed" for day "3" 
	When I click on day "4" 
	Then The three hourly forecast is "Displayed" for day "4" 
	Then I verify the day "4" summary weather condition is same as the first three hour data 
	Then I verify the day "4" summary wind speed and direction is same as the first three hour data 
	Then I verify the day "4" maximum and minimum temperature summary is displayed correctly 
	Then I verify the day "4" rainfall summary is the aggregate three hour data 
	When I click on day "4" 
	Then The three hourly forecast is "Not Displayed" for day "4" 
	When I click on day "5" 
	Then The three hourly forecast is "Displayed" for day "5" 
	Then I verify the day "5" summary weather condition is same as the first three hour data 
	Then I verify the day "5" summary wind speed and direction is same as the first three hour data 
	Then I verify the day "5" maximum and minimum temperature summary is displayed correctly 
	Then I verify the day "5" rainfall summary is the aggregate three hour data 
	When I click on day "5" 
	Then The three hourly forecast is "Not Displayed" for day "5" 
	
	Examples: 
		| CityName  |
		| aberdeen  |
		| dundee    |
		| edinburgh |
		| glasgow   |
		| perth     |
		| stirling  |
