Feature: Get details of a country

  In order to get details of a country
  As a user
  I want to be able to see all countries in the world


  Scenario: User calls web service to get all country names
    Given the country service is up
    When a user sends request "all"
    Then the status code is "200"
    And has 250 countries in the list


  Scenario Outline: User calls web service to get a particular country details
    Given the country service is up
    When a user sends request for a "<Country>"
    Then the status code is "200"
    And the response includes capital "<Capital>" and region "<Region>"
    

    Examples:
      |  Country            |   Capital                	 |    Region 	 |   
      |  Afghanistan        |   Kabul                	 |    Asia  	 |   
      |  Christmas Island   |   Flying Fish Cove         |    Oceania    |   
      |  Canada             |   Ottawa	                 |    Americas	 |   
          
      
   Scenario: User calls web service to get a particular country details that does not exist
    Given the country service is up
    When a user sends request for a "saasdfasdf"
    Then the failure code is "404"
           
      