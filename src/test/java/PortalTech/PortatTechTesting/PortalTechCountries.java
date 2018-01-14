package PortalTech.PortatTechTesting;

import com.google.common.reflect.*;
import com.google.gson.*;
import cucumber.api.java.en.*;
import io.restassured.*;
import io.restassured.response.*;
import java.util.*;
import PortalTech.PortatTechTesting.model.*;
import static io.restassured.RestAssured.when;


public class PortalTechCountries {

	public  Response response;
	public String jsonAsString;


	@Given("^the country service is up$")

	public void the_country_service_is_up()
	{

		RestAssured.baseURI = UrlConstants.BASE_URL;
		RestAssured.basePath = UrlConstants.BASE_PATH;

	}

	@When("^a user sends request \"(.*?)\"$")
	public void a_user_sends_request(String req) {
		
		response =
				when().
				get(req).
				then().
				extract().response();
		
	}



	@Then("^the status code is \"(.*?)\"$")
	public void the_status_code_is(final int statuscode)  {
		org.junit.Assert.assertEquals("Asserting status code", statuscode, response.getStatusCode());
	}

	@Then("^the failure code is \"(.*?)\"$")
	public void the_failure_code_is(final int statuscode)  {
		org.junit.Assert.assertEquals("Asserting status code", statuscode, response.getStatusCode());
	}
	
	@When("^a user sends request for a \"(.*?)\"$")
	public void a_user_sends_request_for_a(String countryName) {
		String CountryPath = String.format(UrlConstants.COUTRY_NAME, countryName);

		response =
				when().
				get(CountryPath).
				then().
				extract().response();

	}

	@And("^the response includes capital \"(.*?)\" and region \"(.*?)\"$")
	public void the_response_includes_country_and_region(String capital,String region)  {

		Country country = getCountryFrom(response).get(0);
		org.junit.Assert.assertEquals("Country Capital", capital, country.getCapital());
		org.junit.Assert.assertEquals("Country Region", region, country.getRegion());

	}

	@Then("^has (\\d+) countries in the list$")
	public void has_countries_in_the_list(int countryCount) throws Throwable {
		int actualCountrySize = getCountryFrom(response).size();
		org.junit.Assert.assertEquals("Country count" , countryCount, actualCountrySize);
	}

	@SuppressWarnings("serial")
	private List<Country> getCountryFrom(Response response)  {
		Gson gson = new Gson();
		List<Country> countries = gson.fromJson(response.getBody().asString(), new TypeToken<ArrayList<Country>>(){}.getType());
		return countries;
	}



}



