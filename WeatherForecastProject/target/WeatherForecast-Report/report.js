$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("weatherforecast.feature");
formatter.feature({
  "line": 1,
  "name": "Weather forecast Testing",
  "description": "",
  "id": "weather-forecast-testing",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Verify weather forecast for different cities",
  "description": "",
  "id": "weather-forecast-testing;verify-weather-forecast-for-different-cities",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I enter the city name as \"\u003cCityName\u003e\" and press enter",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I verify that five day weather forecast is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on day \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The three hourly forecast is \"Displayed\" for day \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I verify the day \"1\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify the day \"1\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I verify the day \"1\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify the day \"1\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click on day \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on day \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "The three hourly forecast is \"Displayed\" for day \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I verify the day \"2\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I verify the day \"2\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I verify the day \"2\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I verify the day \"2\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click on day \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I click on day \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "The three hourly forecast is \"Displayed\" for day \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I verify the day \"3\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I verify the day \"3\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I verify the day \"3\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I verify the day \"3\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I click on day \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I click on day \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "The three hourly forecast is \"Displayed\" for day \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I verify the day \"4\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I verify the day \"4\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I verify the day \"4\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I verify the day \"4\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I click on day \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I click on day \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "The three hourly forecast is \"Displayed\" for day \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I verify the day \"5\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I verify the day \"5\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I verify the day \"5\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I verify the day \"5\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I click on day \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"5\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "weather-forecast-testing;verify-weather-forecast-for-different-cities;",
  "rows": [
    {
      "cells": [
        "CityName"
      ],
      "line": 52,
      "id": "weather-forecast-testing;verify-weather-forecast-for-different-cities;;1"
    },
    {
      "cells": [
        "aberdeen"
      ],
      "line": 53,
      "id": "weather-forecast-testing;verify-weather-forecast-for-different-cities;;2"
    },
    {
      "cells": [
        "dundee"
      ],
      "line": 54,
      "id": "weather-forecast-testing;verify-weather-forecast-for-different-cities;;3"
    },
    {
      "cells": [
        "edinburgh"
      ],
      "line": 55,
      "id": "weather-forecast-testing;verify-weather-forecast-for-different-cities;;4"
    },
    {
      "cells": [
        "glasgow"
      ],
      "line": 56,
      "id": "weather-forecast-testing;verify-weather-forecast-for-different-cities;;5"
    },
    {
      "cells": [
        "perth"
      ],
      "line": 57,
      "id": "weather-forecast-testing;verify-weather-forecast-for-different-cities;;6"
    },
    {
      "cells": [
        "stirling"
      ],
      "line": 58,
      "id": "weather-forecast-testing;verify-weather-forecast-for-different-cities;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7474749494,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Open weather forecast application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The Weather Forecast application is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefWeatherForecast.the_Weather_Forecast_application_is_launched()"
});
formatter.result({
  "duration": 6159814227,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Verify weather forecast for different cities",
  "description": "",
  "id": "weather-forecast-testing;verify-weather-forecast-for-different-cities;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I enter the city name as \"aberdeen\" and press enter",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I verify that five day weather forecast is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on day \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The three hourly forecast is \"Displayed\" for day \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I verify the day \"1\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify the day \"1\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I verify the day \"1\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify the day \"1\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click on day \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on day \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "The three hourly forecast is \"Displayed\" for day \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I verify the day \"2\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I verify the day \"2\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I verify the day \"2\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I verify the day \"2\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click on day \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I click on day \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "The three hourly forecast is \"Displayed\" for day \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I verify the day \"3\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I verify the day \"3\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I verify the day \"3\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I verify the day \"3\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I click on day \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I click on day \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "The three hourly forecast is \"Displayed\" for day \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I verify the day \"4\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I verify the day \"4\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I verify the day \"4\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I verify the day \"4\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I click on day \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I click on day \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "The three hourly forecast is \"Displayed\" for day \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I verify the day \"5\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I verify the day \"5\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I verify the day \"5\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I verify the day \"5\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I click on day \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"5\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "aberdeen",
      "offset": 26
    }
  ],
  "location": "StepDefWeatherForecast.i_enter_the_city_name_as_and_press_enter(String)"
});
formatter.result({
  "duration": 1946951236,
  "status": "passed"
});
formatter.match({
  "location": "StepDefWeatherForecast.i_verify_that_five_day_weather_forecast_is_displayed()"
});
formatter.result({
  "duration": 33220136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 776666836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 669327453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 64211092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 147722047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 386707101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 203996762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 730899653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 666768615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 788451117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 679359589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 62253271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 150058788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 759970146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 392569889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 764957272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 650225464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 786755215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 666528455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 78100984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 135511226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 747597164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 387976051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 718724137,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 624686355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 803939616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 649724206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 58241976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 140070578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 756790586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 332493661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 732952717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 665126493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 779823817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 651411897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 71053816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 122642733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 706592136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 371370499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 729805999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 643289138,
  "status": "passed"
});
formatter.after({
  "duration": 3389603805,
  "status": "passed"
});
formatter.before({
  "duration": 3415297683,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Open weather forecast application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The Weather Forecast application is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefWeatherForecast.the_Weather_Forecast_application_is_launched()"
});
formatter.result({
  "duration": 3530064387,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Verify weather forecast for different cities",
  "description": "",
  "id": "weather-forecast-testing;verify-weather-forecast-for-different-cities;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I enter the city name as \"dundee\" and press enter",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I verify that five day weather forecast is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on day \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The three hourly forecast is \"Displayed\" for day \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I verify the day \"1\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify the day \"1\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I verify the day \"1\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify the day \"1\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click on day \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on day \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "The three hourly forecast is \"Displayed\" for day \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I verify the day \"2\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I verify the day \"2\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I verify the day \"2\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I verify the day \"2\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click on day \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I click on day \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "The three hourly forecast is \"Displayed\" for day \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I verify the day \"3\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I verify the day \"3\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I verify the day \"3\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I verify the day \"3\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I click on day \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I click on day \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "The three hourly forecast is \"Displayed\" for day \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I verify the day \"4\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I verify the day \"4\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I verify the day \"4\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I verify the day \"4\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I click on day \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I click on day \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "The three hourly forecast is \"Displayed\" for day \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I verify the day \"5\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I verify the day \"5\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I verify the day \"5\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I verify the day \"5\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I click on day \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"5\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dundee",
      "offset": 26
    }
  ],
  "location": "StepDefWeatherForecast.i_enter_the_city_name_as_and_press_enter(String)"
});
formatter.result({
  "duration": 1747595112,
  "status": "passed"
});
formatter.match({
  "location": "StepDefWeatherForecast.i_verify_that_five_day_weather_forecast_is_displayed()"
});
formatter.result({
  "duration": 29108262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 829550978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 634833850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 54701561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 132462625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 356448943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 147190821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 722625820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 653829101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 794077029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 676900510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 104930390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 129242833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 709254427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 341265058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 811651433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 654508940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 839105668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 672952438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 95679083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 138653838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 711936013,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 334325038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 737874158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 653321275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 858366121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 674436916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 104421743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 128317087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 698915625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 342995856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 733651440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 665162209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 771467877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 676075344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 68992542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 144654564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 797973375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 335752863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 765805838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 660902954,
  "status": "passed"
});
formatter.after({
  "duration": 1035466970,
  "status": "passed"
});
formatter.before({
  "duration": 4244441826,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Open weather forecast application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The Weather Forecast application is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefWeatherForecast.the_Weather_Forecast_application_is_launched()"
});
formatter.result({
  "duration": 5242465122,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Verify weather forecast for different cities",
  "description": "",
  "id": "weather-forecast-testing;verify-weather-forecast-for-different-cities;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I enter the city name as \"edinburgh\" and press enter",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I verify that five day weather forecast is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on day \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The three hourly forecast is \"Displayed\" for day \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I verify the day \"1\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify the day \"1\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I verify the day \"1\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify the day \"1\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click on day \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on day \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "The three hourly forecast is \"Displayed\" for day \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I verify the day \"2\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I verify the day \"2\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I verify the day \"2\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I verify the day \"2\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click on day \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I click on day \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "The three hourly forecast is \"Displayed\" for day \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I verify the day \"3\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I verify the day \"3\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I verify the day \"3\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I verify the day \"3\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I click on day \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I click on day \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "The three hourly forecast is \"Displayed\" for day \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I verify the day \"4\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I verify the day \"4\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I verify the day \"4\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I verify the day \"4\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I click on day \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I click on day \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "The three hourly forecast is \"Displayed\" for day \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I verify the day \"5\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I verify the day \"5\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I verify the day \"5\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I verify the day \"5\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I click on day \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"5\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "edinburgh",
      "offset": 26
    }
  ],
  "location": "StepDefWeatherForecast.i_enter_the_city_name_as_and_press_enter(String)"
});
formatter.result({
  "duration": 1626503774,
  "status": "passed"
});
formatter.match({
  "location": "StepDefWeatherForecast.i_verify_that_five_day_weather_forecast_is_displayed()"
});
formatter.result({
  "duration": 21621415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 771900987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 661079893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 102403165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 137267886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 338497672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 198755928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 757557868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 627028432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 789522192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 634050968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 111591250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 163808690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 801973174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 375541490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 728696335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 624398573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 742292699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 671483970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 100113224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 145409529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 678189577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 345173720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 713931602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 663967565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 780394454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 678183829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 101300890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 123976957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 705377377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 327968794,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 723808969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 668722741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 785434538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 682647117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 143686942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 145259274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 719498808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 347439439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 766851460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 649608026,
  "status": "passed"
});
formatter.after({
  "duration": 3295760204,
  "status": "passed"
});
formatter.before({
  "duration": 7260842524,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Open weather forecast application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The Weather Forecast application is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefWeatherForecast.the_Weather_Forecast_application_is_launched()"
});
formatter.result({
  "duration": 3320970067,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Verify weather forecast for different cities",
  "description": "",
  "id": "weather-forecast-testing;verify-weather-forecast-for-different-cities;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I enter the city name as \"glasgow\" and press enter",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I verify that five day weather forecast is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on day \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The three hourly forecast is \"Displayed\" for day \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I verify the day \"1\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify the day \"1\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I verify the day \"1\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify the day \"1\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click on day \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on day \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "The three hourly forecast is \"Displayed\" for day \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I verify the day \"2\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I verify the day \"2\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I verify the day \"2\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I verify the day \"2\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click on day \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I click on day \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "The three hourly forecast is \"Displayed\" for day \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I verify the day \"3\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I verify the day \"3\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I verify the day \"3\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I verify the day \"3\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I click on day \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I click on day \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "The three hourly forecast is \"Displayed\" for day \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I verify the day \"4\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I verify the day \"4\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I verify the day \"4\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I verify the day \"4\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I click on day \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I click on day \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "The three hourly forecast is \"Displayed\" for day \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I verify the day \"5\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I verify the day \"5\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I verify the day \"5\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I verify the day \"5\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I click on day \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"5\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "glasgow",
      "offset": 26
    }
  ],
  "location": "StepDefWeatherForecast.i_enter_the_city_name_as_and_press_enter(String)"
});
formatter.result({
  "duration": 1438135912,
  "status": "passed"
});
formatter.match({
  "location": "StepDefWeatherForecast.i_verify_that_five_day_weather_forecast_is_displayed()"
});
formatter.result({
  "duration": 17895439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 779756490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 674916826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 95736147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 140525447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 314549369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 147424413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 728718504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 624736850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 767739027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 637865208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 50831079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 161089746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 802921500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 370812998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 740850915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 623733924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 765334549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 680631412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 91713357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 129973578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 792374969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 322292797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 727809178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 665174114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 804839909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 683952195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 60584054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 143126158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 678524159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 318757718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 720006634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 664240978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 779827101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 676301957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 97850380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 121652533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 678166176,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 331284649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 721160225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 663433465,
  "status": "passed"
});
formatter.after({
  "duration": 1043333968,
  "status": "passed"
});
formatter.before({
  "duration": 2796994259,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Open weather forecast application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The Weather Forecast application is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefWeatherForecast.the_Weather_Forecast_application_is_launched()"
});
formatter.result({
  "duration": 3643875376,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Verify weather forecast for different cities",
  "description": "",
  "id": "weather-forecast-testing;verify-weather-forecast-for-different-cities;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I enter the city name as \"perth\" and press enter",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I verify that five day weather forecast is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on day \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The three hourly forecast is \"Displayed\" for day \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I verify the day \"1\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify the day \"1\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I verify the day \"1\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify the day \"1\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click on day \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on day \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "The three hourly forecast is \"Displayed\" for day \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I verify the day \"2\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I verify the day \"2\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I verify the day \"2\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I verify the day \"2\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click on day \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I click on day \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "The three hourly forecast is \"Displayed\" for day \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I verify the day \"3\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I verify the day \"3\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I verify the day \"3\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I verify the day \"3\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I click on day \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I click on day \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "The three hourly forecast is \"Displayed\" for day \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I verify the day \"4\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I verify the day \"4\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I verify the day \"4\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I verify the day \"4\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I click on day \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I click on day \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "The three hourly forecast is \"Displayed\" for day \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I verify the day \"5\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I verify the day \"5\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I verify the day \"5\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I verify the day \"5\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I click on day \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"5\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "perth",
      "offset": 26
    }
  ],
  "location": "StepDefWeatherForecast.i_enter_the_city_name_as_and_press_enter(String)"
});
formatter.result({
  "duration": 1559682939,
  "status": "passed"
});
formatter.match({
  "location": "StepDefWeatherForecast.i_verify_that_five_day_weather_forecast_is_displayed()"
});
formatter.result({
  "duration": 28719079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 775978376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 633954083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 51340547,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 122765893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 343752052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 157275505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 747957610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 658285822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 815164343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 668069997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 100140320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 154478561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 668268694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 335030330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 721910675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 656937639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 815163522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 670368968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 83198953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 122539690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 709728590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 324327387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 725540998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 636494447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 803017154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 669078670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 97925096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 123328730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 652596278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 332323701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 714885265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 664209778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 770277338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 675161914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 101297195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 112195550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 708956382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 322984951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 715772011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 657858459,
  "status": "passed"
});
formatter.after({
  "duration": 1036663257,
  "status": "passed"
});
formatter.before({
  "duration": 2801601644,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Open weather forecast application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "The Weather Forecast application is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefWeatherForecast.the_Weather_Forecast_application_is_launched()"
});
formatter.result({
  "duration": 3782057514,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Verify weather forecast for different cities",
  "description": "",
  "id": "weather-forecast-testing;verify-weather-forecast-for-different-cities;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I enter the city name as \"stirling\" and press enter",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I verify that five day weather forecast is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on day \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The three hourly forecast is \"Displayed\" for day \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I verify the day \"1\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify the day \"1\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I verify the day \"1\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify the day \"1\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click on day \"1\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I click on day \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "The three hourly forecast is \"Displayed\" for day \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I verify the day \"2\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I verify the day \"2\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I verify the day \"2\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I verify the day \"2\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click on day \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I click on day \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "The three hourly forecast is \"Displayed\" for day \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I verify the day \"3\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I verify the day \"3\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I verify the day \"3\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I verify the day \"3\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I click on day \"3\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I click on day \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "The three hourly forecast is \"Displayed\" for day \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I verify the day \"4\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I verify the day \"4\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I verify the day \"4\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I verify the day \"4\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I click on day \"4\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I click on day \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "The three hourly forecast is \"Displayed\" for day \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I verify the day \"5\" summary weather condition is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I verify the day \"5\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I verify the day \"5\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I verify the day \"5\" rainfall summary is the aggregate three hour data",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I click on day \"5\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "The three hourly forecast is \"Not Displayed\" for day \"5\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "stirling",
      "offset": 26
    }
  ],
  "location": "StepDefWeatherForecast.i_enter_the_city_name_as_and_press_enter(String)"
});
formatter.result({
  "duration": 1679698277,
  "status": "passed"
});
formatter.match({
  "location": "StepDefWeatherForecast.i_verify_that_five_day_weather_forecast_is_displayed()"
});
formatter.result({
  "duration": 22655542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 787812331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 675674255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 91526977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 127324424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 304616581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 166499717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 714382775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 669042544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 796595634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 634039062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 50506759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 134105979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 836114131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 329832602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 750571869,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 623482268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 833440345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 633525899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 57278051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 136879524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 688277134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 368900337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 714787559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 663787342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 790881458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 667956690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 95836317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 124938420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 668099965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 313477884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 716845138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 663513518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 810556549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 671624782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 85848517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 130384109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 639497067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefWeatherForecast.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 322375314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDefWeatherForecast.i_click_on_day(String)"
});
formatter.result({
  "duration": 732911663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 54
    }
  ],
  "location": "StepDefWeatherForecast.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 650477118,
  "status": "passed"
});
formatter.after({
  "duration": 1141711058,
  "status": "passed"
});
});