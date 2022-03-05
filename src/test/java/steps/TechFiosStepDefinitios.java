package steps;

import java.io.IOException;

import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.BankAndCashPage;
import pages.DatabasePage;
import pages.LoginPage;
import pages.TestBase;

public class TechFiosStepDefinitios extends TestBase {
	String data;
	LoginPage loginpage;// intialising globle variable
	BankAndCashPage bankAndCash;
	DatabasePage databasePage;

	@Before
	public void beforerun() {
		initDriver(); // Initializing driver
		loginpage = PageFactory.initElements(driver, LoginPage.class);// defining page object with driver
		databasePage = new DatabasePage();
		bankAndCash = PageFactory.initElements(driver, BankAndCashPage.class);
	}

	// Given User is on techfios login page
	@Given("^User is on techfios login page$")
	public void user_is_on_techfios_login_page()  {
		driver.get("https://techfios.com/billing/?ng=login/");
		// Thread.sleep(3000);
        System.out.println("Given User is on techfios login page");
	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as_(String username) {
		loginpage.insertUserName(username);// we passing value from feature
		// Thread.sleep(3000);

	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password)  {
		loginpage.insertPassword(password);// we passing value from from feature
		// Thread.sleep(3000);

	}

	@Then("^User should land on dashboardpage$")
    public void user_should_land_on_dashboardpage() throws Throwable {
	  String expectedTitle = "Dashboard- iBilling";//xpath   
      String actualPage = loginpage.getpageTitle();
	  Assert.assertEquals(expectedTitle, actualPage);//validating
//      takeScreenshot(driver);
	}
	@And ("^User clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String button) {
		switch(button) {
		case "Signin":
			loginpage.clickSignin();
			// Thread.sleep(6000);
		case "dashboardpage":
			loginpage.getpageTitle();
			// Thread.sleep(6000);
		case "Bank&cash":
			bankAndCash.clicksOnbankAndcash();
			// Thread.sleep(3000);
			break;
		case "NewAccount":
		    bankAndCash.clicksOnNewAccount();
		    // Thread.sleep(3000);
		    break;
		case "Submit":
		    bankAndCash.clickSubmitbutton();
		    // Thread.sleep(3000);
		    break;
		default:
			System.out.println("unable to click");
		}	
	}  
        
//	@Then("^User clicks on \"([^\"]*)\"$")
//	_clicks_on_Bankandcash() throws Throwable {
//		bankAndCash.clickbankandcash();
//		Thread.sleep(30public void user00);
//		
//	}
//
//	@Then("^User clicks on \"([^\"]*)\"$")
//	public void user_clicks_on_NewAccount() throws Throwable {
//		bankAndCash.clickNewAccount();
//		Thread.sleep(3000);
//	}
	@Then ("^User should land on \"([^\"]*)\"$")
    public void user_should_land_on(String accounts) {
		if(driver.getPageSource().contains("Accounts")) {
		Assert.assertTrue(true);
		}
		else {
			Assert.assertFalse(false);
		}
	}	

	@Then("^User enters on \"([^\"]*)\"$")
	public void user_Enters(String data)  {
		switch (data) {
		case "accountTitle":
			bankAndCash.enterAccountTitle("accountTitle333" + generateRandomNumber(9999)+ generateRandomNumber(9999));
			// Thread.sleep(3000);
			break;
		case "description":
			bankAndCash.insertDiscription("description");
			break;
		case "initialBalance":
			bankAndCash.insertInitialBalance("10000");
			break;
		case "accountNumber":
			bankAndCash.insertAccountNumber("354456");
			break;
		case "contactPerson":
			bankAndCash.insertContactPerson("contactPerson");
			break;
		case "phoneNumber":
			bankAndCash.insertPhoneNumber("455367789");
			break;
		case "internetBankingURL":
			bankAndCash.insertinternetBankURL("https://www.chace.com");
			break;
		default:
			System.out.println("unable to enter data");
		}
	}


	@Then("^User should be able to validate account created successfully$") 
	 public void user_should_be_able_to_validate()throws InterruptedException, IOException {
         Thread.sleep(3000);
         takeScreenshot(driver);
	}

	@When("^User enters \"([^\"]*)\" from mysql database$")
	public void user_enters_from_mysql_database(String data) throws Throwable {
		switch (data) {
		case "username":
			System.out.println("Username from DB: " + databasePage.getData("username"));
			loginpage.insertUserName(databasePage.getData("username"));// first thing we login from loginpage and insurt
																		// data from databasepage
			// Thread.sleep(3000); // from database column name that we getting which contains method get data with
								// database url
			break;
		case "password":
			System.out.println("Password from DB: " + databasePage.getData("password"));
			loginpage.insertPassword(databasePage.getData("password"));
			break;
		default:
			System.out.println("unable to enter data");
		}
	}



	//  @After
	//  public void teardown() {
	//  	driver.close();
	//  	driver.quit();
	//  }
}
