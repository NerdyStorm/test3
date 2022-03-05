package runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(
	features = "src/test/java/features",
	glue = "steps",
	tags = "@TFScenario1",
	monochrome = true,
	dryRun = false,
	plugin = {
			"pretty",
			"html:target/cucumber",
			"json:target/cucumber.json",
	}
		
		)
public class TestLoginRunner {

}
