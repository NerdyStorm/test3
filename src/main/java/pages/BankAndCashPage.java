package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BankAndCashPage {

	public WebDriver driver;

	public void bankandCash(WebDriver driver) {
		this.driver = driver;
	}
	@FindBy(how = How.XPATH, using = "//span[text() = 'Bank & Cash']")
	WebElement BANK_AND_CASH_ELEMENT;
	@FindBy(how = How.XPATH, using = "//a[text() = 'New Account']")
	WebElement NEW_ACCOUNT_ELEMENT;
	// @FindBy(how = How.XPATH, using = "//h2[contains(text(),' Accounts ')]")
	// WebElement ACCOUNTS_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@name = 'account']")
	WebElement ACCOUNT_TITLE_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@name='description']")
	WebElement DISCRPTION_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@class = 'form-control amount']")
	WebElement INITIALBALANCE_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@name= 'account_number']")
	WebElement ACCOUNT_NUMBER_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@name = 'contact_person']")
	WebElement CONTACT_PERSON_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@name = 'contact_phone']")
	WebElement PHONE_NUMBER_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id = 'ib_url']")
	WebElement INTERNET_BANK_URL_FIELD_ELEMENT;
	@FindBy(how = How.XPATH, using = "//*[@id='page-wrapper']/div[3]/div[1]/div/div/div[2]/form/button")
	WebElement SUBMIT_BUTTON_ELEMENT;

	public void clicksOnbankAndcash() {
		BANK_AND_CASH_ELEMENT.click();
	}

	public void clicksOnNewAccount() {
		NEW_ACCOUNT_ELEMENT.click();

	}

	// public void getpagesource() {
	// 	ACCOUNTS_ELEMENT.getText();
	// }

	public void enterAccountTitle(String accountTitle) {
		ACCOUNT_TITLE_ELEMENT.sendKeys(accountTitle);
		System.out.println("adding account title");
	}

	public void insertDiscription(String discription) {
		DISCRPTION_ELEMENT.sendKeys(discription);
	}

	public void insertInitialBalance(String initialBalance) {
		INITIALBALANCE_ELEMENT.sendKeys(initialBalance);
	}

	public void insertAccountNumber(String accountNumber) {
		ACCOUNT_NUMBER_ELEMENT.sendKeys(accountNumber);
	}

	public void insertContactPerson(String contatPerson) {
		CONTACT_PERSON_ELEMENT.sendKeys(contatPerson);
	}

	public void insertPhoneNumber(String phone) {
		PHONE_NUMBER_ELEMENT.sendKeys(phone);
	}

	public void insertinternetBankURL(String internetBankingURL) {
		INTERNET_BANK_URL_FIELD_ELEMENT.sendKeys(internetBankingURL);
	}

	public void clickSubmitbutton() {
		SUBMIT_BUTTON_ELEMENT.click();
		System.out.println("submit clicked!---------------------------------------");
	}

	public String validatecreatedAcount() {
		return driver.getCurrentUrl();
	
	}

}
