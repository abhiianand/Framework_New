import {expect} from '@playwright/test'; 
export default class PracLoc{
constructor(page){
    this.page=page;
    this.SignupLoginButton="//a[normalize-space()='Signup / Login']"
    this.SignUpName="//input[@data-qa='signup-name']"
    this.SignUpEmail="//input[@data-qa='signup-email']"
    this.SignUpButton="//button[@data-qa='signup-button']"
    this.MrCheckbox="//input[@id='id_gender1']"
    this.PasswordSignUpForm="//input[@id='password']"
    this.DateDOBSignUpForm="//select[@id='days']"
    this.MonthDOBSignUpForm="//select[@id='months']"
    this.YearDOBSignUpForm="//select[@id='years']"
    this.NewsletterCheckboxSignUpForm="//input[@id='newsletter']"
    this.RecieveSpecialOfferCheckbox="//input[@id='optin']"
    this.FirstNameSignUpForm="//input[@id='first_name']"
    this.LastNameSignUpForm="//input[@id='last_name']"
    this.CompanySignUpForm="//input[@id='company']"
    this.Address1SignUpForm="//input[@id='address1']"
    this.StateSignUpForm="//input[@id='state']"
    this.CitySignUpForm="//input[@id='city']"
    this.ZipCodeSignUpForm="//input[@id='zipcode']"
    this.MobileSignUpForm="//input[@id='mobile_number']"
    this.CreateAccountButtonSignUpForm="//button[@data-qa='create-account']"
    this.SuccessAlertContactUs="//div[@class='status alert alert-success']"
    this.HomeButton="//span[normalize-space()='Home']"
    this.ContinueButtonAccountCreated="//a[@data-qa='continue-button']"
    this.Logout="//a[normalize-space()='Logout']"
    this.NewUserSignUpLabel="//h2[normalize-space()='New User Signup!']"
    this.EnterAccInfoLabel="//h2[normalize-space()='Enter Account Information']"
    this.AccountCreatedLabel="//h2[@data-qa='account-created']"
    this.LoggedInAsLabel="//a[contains(text(), 'Logged in as')]"
    this.DeleteAccount="//a[normalize-space()='Delete Account']"
    this.AccountDeleteLabel="//h2[@data-qa='account-deleted']"
    this.LoginToYourAccLabel="//h2[normalize-space()='Login to your account']"
    this.EmailLogin="//input[@data-qa='login-email']"
    this.PasswordLogin="//input[@data-qa='login-password']"
    this.LoginButton="//button[@data-qa='login-button']"
    this.IncorrectPasswordlabel="//p[normalize-space()='Your email or password is incorrect!']"
    this.EmailAlreadyExist="//p[normalize-space()='Email Address already exist!']"
    this.ContactUs="//a[normalize-space()='Contact us']"
    this.GetInTouchlabel="//h2[normalize-space()='Get In Touch']"
    this.NameContactUs="//input[@placeholder='Name']"
    this.EmailContactUs="//input[@placeholder='Email']"
    this.SubjectContactUs="//input[@placeholder='Subject']"
    this.MessageContactUs="//textarea[@id='message']"
    this.UploadFileContactUs="//input[@name='upload_file']"
    this.SubmitContactUs="//input[@name='submit']"
    this.TestCases="//a[normalize-space()='Test Cases']"
    this.Products="//a[@href='/products']"
    this.AllProductsList="//div[@id='cartModal']/following-sibling::div"
    this.ProductNameProductDetails="//div[@class='product-information']/h2"
    this.CategoryProductDetails="//p[contains(text(),'Category:')]"
    this.PriceProductDetails="//span[contains(text(),'Rs.')]"
    this.AvailabilityProductDetails="//b[normalize-space()='Availability:']/parent::p"
    this.ConditionProductDetails="//b[normalize-space()='Condition:']/parent::p"
    this.BrandProductDetails="//b[normalize-space()='Brand:']/parent::p"
    this.SearchField="//input[@id='search_product']"
    this.SearchButton="//button[@id='submit_search']"
    this.SearchedProductlabel="//h2[normalize-space()='Searched Products']"
    this.SubscriptionLabel="//h2[normalize-space()='Subscription']"
    this.SubsciptionEmailField="//input[@id='susbscribe_email']"
    this.SubscriptionArrow="//button[@id='subscribe']"
    this.SubscriptionSucess="//div[contains(text(),'You have been successfully subscribed!')]"
    this.Cart="//a[normalize-space()='Cart']"
}
async generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(7); 
    const email = `${randomString}@ex.co`;
    return email;
}
async Loginuser(username, password)
{
    await this.page.locator(this.Inputemailaddress).fill(username);
    await this.page.locator(this.button).click();
    await this.page.locator(this.inputpassword).fill(password);
    await this.page.locator(this.button).click();
    await this.page.waitForLoadState('domcontentloaded');
}
async text_match(locator,expected_text)
{
    let text_content= await this.page.textContent(locator)
    expect(text_content).toBe(expected_text)
}
}