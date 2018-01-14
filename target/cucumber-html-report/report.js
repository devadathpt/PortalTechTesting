$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resource/restcountries.feature");
formatter.feature({
  "line": 1,
  "name": "Get details of a country",
  "description": "\r\nIn order to get details of a country\r\nAs a user\r\nI want to be able to see all countries in the world",
  "id": "get-details-of-a-country",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "User calls web service to get all country names",
  "description": "",
  "id": "get-details-of-a-country;user-calls-web-service-to-get-all-country-names",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "the country service is up",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "a user sends request \"all\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the status code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "has 250 countries in the list",
  "keyword": "And "
});
formatter.match({
  "location": "PortalTechCountries.the_country_service_is_up()"
});
formatter.result({
  "duration": 1072649851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 22
    }
  ],
  "location": "PortalTechCountries.a_user_sends_request(String)"
});
formatter.result({
  "duration": 2724371944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "PortalTechCountries.the_status_code_is(int)"
});
formatter.result({
  "duration": 4313989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "250",
      "offset": 4
    }
  ],
  "location": "PortalTechCountries.has_countries_in_the_list(int)"
});
formatter.result({
  "duration": 397768491,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "User calls web service to get a particular country details",
  "description": "",
  "id": "get-details-of-a-country;user-calls-web-service-to-get-a-particular-country-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "the country service is up",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "a user sends request for a \"\u003cCountry\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "the status code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the response includes capital \"\u003cCapital\u003e\" and region \"\u003cRegion\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "get-details-of-a-country;user-calls-web-service-to-get-a-particular-country-details;",
  "rows": [
    {
      "cells": [
        "Country",
        "Capital",
        "Region"
      ],
      "line": 23,
      "id": "get-details-of-a-country;user-calls-web-service-to-get-a-particular-country-details;;1"
    },
    {
      "cells": [
        "Afghanistan",
        "Kabul",
        "Asia"
      ],
      "line": 24,
      "id": "get-details-of-a-country;user-calls-web-service-to-get-a-particular-country-details;;2"
    },
    {
      "cells": [
        "Christmas Island",
        "Flying Fish Cove",
        "Oceania"
      ],
      "line": 25,
      "id": "get-details-of-a-country;user-calls-web-service-to-get-a-particular-country-details;;3"
    },
    {
      "cells": [
        "Canada",
        "Ottawa",
        "Americas"
      ],
      "line": 26,
      "id": "get-details-of-a-country;user-calls-web-service-to-get-a-particular-country-details;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "User calls web service to get a particular country details",
  "description": "",
  "id": "get-details-of-a-country;user-calls-web-service-to-get-a-particular-country-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "the country service is up",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "a user sends request for a \"Afghanistan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "the status code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the response includes capital \"Kabul\" and region \"Asia\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PortalTechCountries.the_country_service_is_up()"
});
formatter.result({
  "duration": 72609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Afghanistan",
      "offset": 28
    }
  ],
  "location": "PortalTechCountries.a_user_sends_request_for_a(String)"
});
formatter.result({
  "duration": 232417766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "PortalTechCountries.the_status_code_is(int)"
});
formatter.result({
  "duration": 108913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kabul",
      "offset": 31
    },
    {
      "val": "Asia",
      "offset": 50
    }
  ],
  "location": "PortalTechCountries.the_response_includes_country_and_region(String,String)"
});
formatter.result({
  "duration": 762759,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User calls web service to get a particular country details",
  "description": "",
  "id": "get-details-of-a-country;user-calls-web-service-to-get-a-particular-country-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "the country service is up",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "a user sends request for a \"Christmas Island\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "the status code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the response includes capital \"Flying Fish Cove\" and region \"Oceania\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PortalTechCountries.the_country_service_is_up()"
});
formatter.result({
  "duration": 63074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Christmas Island",
      "offset": 28
    }
  ],
  "location": "PortalTechCountries.a_user_sends_request_for_a(String)"
});
formatter.result({
  "duration": 124962274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "PortalTechCountries.the_status_code_is(int)"
});
formatter.result({
  "duration": 105246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Flying Fish Cove",
      "offset": 31
    },
    {
      "val": "Oceania",
      "offset": 61
    }
  ],
  "location": "PortalTechCountries.the_response_includes_country_and_region(String,String)"
});
formatter.result({
  "duration": 596639,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User calls web service to get a particular country details",
  "description": "",
  "id": "get-details-of-a-country;user-calls-web-service-to-get-a-particular-country-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "the country service is up",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "a user sends request for a \"Canada\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "the status code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the response includes capital \"Ottawa\" and region \"Americas\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PortalTechCountries.the_country_service_is_up()"
});
formatter.result({
  "duration": 87644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Canada",
      "offset": 28
    }
  ],
  "location": "PortalTechCountries.a_user_sends_request_for_a(String)"
});
formatter.result({
  "duration": 136908985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "PortalTechCountries.the_status_code_is(int)"
});
formatter.result({
  "duration": 103046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ottawa",
      "offset": 31
    },
    {
      "val": "Americas",
      "offset": 51
    }
  ],
  "location": "PortalTechCountries.the_response_includes_country_and_region(String,String)"
});
formatter.result({
  "duration": 560335,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User calls web service to get a particular country details that does not exist",
  "description": "",
  "id": "get-details-of-a-country;user-calls-web-service-to-get-a-particular-country-details-that-does-not-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "the country service is up",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "a user sends request for a \"saasdfasdf\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the failure code is \"404\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PortalTechCountries.the_country_service_is_up()"
});
formatter.result({
  "duration": 65641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saasdfasdf",
      "offset": 28
    }
  ],
  "location": "PortalTechCountries.a_user_sends_request_for_a(String)"
});
formatter.result({
  "duration": 99009770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 21
    }
  ],
  "location": "PortalTechCountries.the_failure_code_is(int)"
});
formatter.result({
  "duration": 142651,
  "status": "passed"
});
});