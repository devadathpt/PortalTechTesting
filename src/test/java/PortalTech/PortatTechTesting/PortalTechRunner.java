package PortalTech.PortatTechTesting;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions( features = {"classpath:resource/restcountries.feature"},monochrome = true,plugin = {"html:target/cucumber-html-report", "json:target/cucumber-json-report.json" })
public class PortalTechRunner {

	
	public void runTech()
	{
		
	}
}
