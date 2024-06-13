import {test,expect} from  '@playwright/test'
import PracLoc from '../locators/PracLoc.page';
import RandomString from '../Utilities/RamdomStringGenerator/StringGenerator';
import PracString from '../Utilities/PracString';
import AppProp from '../Properties/AppProp.json'
import exp from 'constants';

const {chromium}= require('@playwright/test');
const path = require('path');

let context;
let page;
let browser;
test.describe("Automation Practice",async()=>{
let Email
let Name
test.beforeAll("Creating Account",async()=>{
   await test.step("User creates a context",async()=>{
      browser=await chromium.launch({headless:true});
      context= await browser.newContext();
      page=await context.newPage();
   })
   let Prac= new PracLoc(page)
   Email= await Prac.generateRandomEmail()
   Name = PracString.getRandomName()
   await test.step("Creating Account",async()=>{
      await page.goto(AppProp.appURI) 
      await page.click(Prac.SignupLoginButton)
      await page.fill(Prac.SignUpName,Name.fullname)
      await page.fill(Prac.SignUpEmail,Email)
      await page.click(Prac.SignUpButton)
      await page.waitForLoadState('domcontentloaded')
      await page.click(Prac.MrCheckbox)
      await page.fill(Prac.PasswordSignUpForm,PracString.Userdata.NEW_USER_PASSWORD)
      await page.selectOption(Prac.DateDOBSignUpForm,"14")
      await page.selectOption(Prac.MonthDOBSignUpForm,"10")
      await page.selectOption(Prac.YearDOBSignUpForm,"1996")
      await page.click(Prac.NewsletterCheckboxSignUpForm)
      await page.click(Prac.RecieveSpecialOfferCheckbox)
      await page.fill(Prac.FirstNameSignUpForm,Name.firstName)
      await page.fill(Prac.LastNameSignUpForm,Name.lastName)
      await page.fill(Prac.CompanySignUpForm,PracString.Userdata.COMPANY)
      await page.fill(Prac.Address1SignUpForm,PracString.Userdata.ADDRESS)
      await page.fill(Prac.StateSignUpForm,PracString.Userdata.STATE)
      await page.fill(Prac.CitySignUpForm,PracString.Userdata.CITY)
      await page.fill(Prac.ZipCodeSignUpForm,PracString.Userdata.ZIPCODE)
      await page.fill(Prac.MobileSignUpForm,PracString.Userdata.MOBILE)
      await page.click(Prac.CreateAccountButtonSignUpForm)
      await page.waitForLoadState('domcontentloaded')
      await page.click(Prac.ContinueButtonAccountCreated)
      await page.waitForLoadState('domcontentloaded')
      await page.click(Prac.Logout)
   })   
   await test.step("Closing context",async()=>{
      await context.close()
   })
})
test("SN_1 Register User",async()=>{  
await test.step("User creates a context",async()=>{
   browser=await chromium.launch({headless:true});
   context= await browser.newContext();
   page=await context.newPage();
 })
 let Prac= new PracLoc(page)
 await test.step("Navigating to URL",async()=>{
    await page.goto(AppProp.appURI)
 })
 
 await test.step("Validating Homepage title",async()=>{
await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
 })
 await test.step("Click on Login/Signup Button",async()=>{
   await page.click(Prac.SignupLoginButton)
 })
 await test.step("Verify New user signup is available",async()=>{
   await expect(await page.locator(Prac.NewUserSignUpLabel)).toBeVisible()
 })
 let Email= await Prac.generateRandomEmail()
let Name_New = PracString.getRandomName()
 await test.step(" Enter name and email address in New user signup",async()=>{
   await page.fill(Prac.SignUpName,Name_New.fullname)
   await page.fill(Prac.SignUpEmail,Email)
   await page.click(Prac.SignUpButton)
 })
 await test.step("Verify that 'ENTER ACCOUNT INFORMATION' is visible",async()=>{
   await expect(await page.locator(Prac.EnterAccInfoLabel)).toBeVisible()
 })
 await test.step("Fill details: Title, Name, Email, Password, Date of birth",async()=>{
   await page.click(Prac.MrCheckbox)
   await page.fill(Prac.PasswordSignUpForm,PracString.Userdata.NEW_USER_PASSWORD)
   await page.selectOption(Prac.DateDOBSignUpForm,"14")
   await page.selectOption(Prac.MonthDOBSignUpForm,"10")
   await page.selectOption(Prac.YearDOBSignUpForm,"1996")
 })
 await test.step("Select checkbox 'Sign up for our newsletter!'",async()=>{
   await page.click(Prac.NewsletterCheckboxSignUpForm)
 })
 await test.step("Select checkbox 'Receive special offers from our partners!'",async()=>{
   await page.click(Prac.RecieveSpecialOfferCheckbox)
 })
 await test.step("Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number",async()=>{
   await page.fill(Prac.FirstNameSignUpForm,Name_New.firstName)
   await page.fill(Prac.LastNameSignUpForm,Name_New.lastName)
   await page.fill(Prac.CompanySignUpForm,PracString.Userdata.COMPANY)
   await page.fill(Prac.Address1SignUpForm,PracString.Userdata.ADDRESS)
   await page.fill(Prac.StateSignUpForm,PracString.Userdata.STATE)
   await page.fill(Prac.CitySignUpForm,PracString.Userdata.CITY)
   await page.fill(Prac.ZipCodeSignUpForm,PracString.Userdata.ZIPCODE)
   await page.fill(Prac.MobileSignUpForm,PracString.Userdata.MOBILE)
   await page.click(Prac.CreateAccountButtonSignUpForm)
 })
 await test.step("Verify that 'ACCOUNT CREATED!' is visible",async()=>{
   await expect(await page.locator(Prac.AccountCreatedLabel)).toBeVisible()
 })
await test.step("Click 'Continue' button",async()=>{
   await page.click(Prac.ContinueButtonAccountCreated)
})
await test.step("Verify that 'Logged in as username' is visible",async()=>{
   await Prac.text_match(Prac.LoggedInAsLabel," Logged in as "+Name_New.fullname)
   await expect(await page.locator(Prac.LoggedInAsLabel)).toBeVisible()
})
await test.step("Click 'Delete Account' button",async()=>{
   await page.click(Prac.DeleteAccount)
})
await test.step(" Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button",async()=>{
   await expect(await page.locator(Prac.AccountDeleteLabel)).toBeVisible()
   await page.click(Prac.ContinueButtonAccountCreated)
})
await test.step("Closing context",async()=>{
   await context.close()
})
})
test("SN_2  Login User with correct email and password",async()=>{
   await test.step("User creates a context",async()=>{
      browser=await chromium.launch({headless:true});
      context= await browser.newContext();
      page=await context.newPage();
   })
   let Prac= new PracLoc(page)
   await test.step("Navigating to URL",async()=>{
      await page.goto(AppProp.appURI)
   })
   await test.step("Validating Homepage title",async()=>{
      await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
   })
   await test.step("Click on Login/Signup Button",async()=>{
      await page.click(Prac.SignupLoginButton)
   })
   await test.step("Verify 'Login to your account' is visible",async()=>{
      await expect(await page.locator(Prac.LoginToYourAccLabel)).toBeVisible()
   })
   await test.step("Enter correct email address and password",async()=>{
      await page.fill(Prac.EmailLogin,Email)
      await page.fill(Prac.PasswordLogin,PracString.Userdata.NEW_USER_PASSWORD)
   })
   await test.step("Click 'login' button",async()=>{
      await page.click(Prac.LoginButton)
   })
   await test.step("Verify that 'Logged in as username' is visible",async()=>{
      await Prac.text_match(Prac.LoggedInAsLabel," Logged in as "+Name.fullname)
   await expect(await page.locator(Prac.LoggedInAsLabel)).toBeVisible()
   })
   await test.step("Click 'Delete Account' button",async()=>{
      await page.click(Prac.DeleteAccount)
   })
   await test.step(" Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button",async()=>{
      await expect(await page.locator(Prac.AccountDeleteLabel)).toBeVisible()
   })
   await test.step("Closing context",async()=>{
      await context.close()
   })
})
test("SN_3 Login User with incorrect email and password",async()=>{
   await test.step("User creates a context",async()=>{
      browser=await chromium.launch({headless:true});
      context= await browser.newContext();
      page=await context.newPage();
   })
   let Prac= new PracLoc(page)
   let New_Email= await Prac.generateRandomEmail()
   await test.step("Navigating to URL",async()=>{
      await page.goto(AppProp.appURI)
   })
   await test.step("Validating Homepage title",async()=>{
      await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
   })
   await test.step("Click on Login/Signup Button",async()=>{
      await page.click(Prac.SignupLoginButton)
   })
   await test.step("Verify 'Login to your account' is visible",async()=>{
      await expect(await page.locator(Prac.LoginToYourAccLabel)).toBeVisible()
   })
   await test.step("Enter Incorrect email address and password",async()=>{
      await page.fill(Prac.EmailLogin,New_Email)
      await page.fill(Prac.PasswordLogin,PracString.Userdata.NEW_USER_PASSWORD)
   })
   await test.step("Click 'login' button",async()=>{
      await page.click(Prac.LoginButton)
   })
   await test.step("Verify error 'Your email or password is incorrect!' is visible",async()=>{
      await Prac.text_match(Prac.IncorrectPasswordlabel,PracString.Userdata.INCORRECTCREDENTIALERROR)
      await expect(await page.locator(Prac.IncorrectPasswordlabel)).toBeVisible()
   })
   await test.step("Closing context",async()=>{
      await context.close()
   })
})
test("SN_4 Logout User",async()=>{
   await test.step("User creates a context",async()=>{
      browser=await chromium.launch({headless:true});
      context= await browser.newContext();
      page=await context.newPage();
   })
   let Prac= new PracLoc(page)
   await test.step("Navigating to URL",async()=>{
      await page.goto(AppProp.appURI)
   })
   await test.step("Validating Homepage title",async()=>{
      await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
   })
   await test.step("Click on Login/Signup Button",async()=>{
      await page.click(Prac.SignupLoginButton)
   })
   await test.step("Verify 'Login to your account' is visible",async()=>{
      await expect(await page.locator(Prac.LoginToYourAccLabel)).toBeVisible()
   })
   await test.step("Enter correct email address and password",async()=>{
      await page.fill(Prac.EmailLogin,Email)
      await page.fill(Prac.PasswordLogin,PracString.Userdata.NEW_USER_PASSWORD)
   })
   await test.step("Click 'login' button",async()=>{
      await page.click("//button[@data-qa='login-button']")
   })
   await test.step("Verify that 'Logged in as username' is visible",async()=>{
      await page.waitForLoadState('domcontentloaded')
      await Prac.text_match(Prac.LoggedInAsLabel," Logged in as "+Name.fullname)
      await expect(await page.locator(Prac.LoggedInAsLabel)).toBeVisible()
   })
   await test.step("Click 'Logout' button",async()=>{
      await page.click(Prac.Logout)
   })
   await test.step("Verify that user is navigated to login page",async()=>{
      await expect(page).toHaveTitle(PracString.Title.LoginSignUpPage)
   })
})
test("SN_5 Register User with existing email",async()=>{
   await test.step("User creates a context",async()=>{
      browser=await chromium.launch({headless:true});
      context= await browser.newContext();
      page=await context.newPage();
    })
    let Prac= new PracLoc(page)
    await test.step("Navigating to URL",async()=>{
       await page.goto(AppProp.appURI)
    })
    
    await test.step("Validating Homepage title",async()=>{
   await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
    })
    await test.step("Click on Login/Signup Button",async()=>{
      await page.click(Prac.SignupLoginButton)
    })
    await test.step("Verify New user signup is available",async()=>{
      await expect(await page.locator(Prac.NewUserSignUpLabel)).toBeVisible()
    })
    await test.step("Enter name and already registered email address",async()=>{
      await page.fill(Prac.SignUpName,Name.fullname)
      await page.fill(Prac.SignUpEmail,Email)
    })
await test.step("Click 'Signup' button",async()=>{
   await page.click(Prac.SignUpButton)
})
await test.step("Verify error 'Email Address already exist!' is visible",async()=>{
await expect(await page.locator(Prac.EmailAlreadyExist)).toBeVisible()
})   
})
test("SN_6 Contact Us Form",async()=>{
   await test.step("User creates a context",async()=>{
      browser=await chromium.launch({headless:true});
      context= await browser.newContext();
      page=await context.newPage();
    })
    let Prac= new PracLoc(page)
    await test.step("Navigating to URL",async()=>{
       await page.goto(AppProp.appURI)
    })
   await test.step("Validating Homepage title",async()=>{
      await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
    })
   await test.step("Click on 'Contact Us' button",async()=>{
      await page.click(Prac.ContactUs)
      await page.waitForLoadState('domcontentloaded')
   })
   await test.step("Verify 'GET IN TOUCH' is visible",async()=>{
      await expect(await page.locator(Prac.GetInTouchlabel)).toBeVisible()
   })
  
   let Email_ContactUs= await Prac.generateRandomEmail()
   let Name_ContactUs = PracString.getRandomName()
   await test.step("Enter name, email, subject and message",async()=>{
      await page.fill(Prac.NameContactUs,Name_ContactUs.fullname)
      await page.fill(Prac.EmailContactUs,Email_ContactUs)
      await page.fill(Prac.SubjectContactUs,PracString.ContactUs.SUBJECT)
      await page.fill(Prac.MessageContactUs,PracString.ContactUs.MESSAGE)
   })
   await test.step("Upload File",async()=>{
      const filepath= path.resolve('C:/Users/coola/OneDrive/Desktop/PW Automation/Framework_New/test_data/test.pdf')
      const dropZone= await page.locator(Prac.UploadFileContactUs)
      await dropZone.setInputFiles(filepath)
      await page.waitForLoadState('domcontentloaded')
      })
   await test.step("Click 'Submit' button",async()=>{
      await page.click(Prac.SubmitContactUs)
   })
   await test.step("Click OK button",async()=>{
      page.on('dialog',async dialog =>{
         await dialog.accept()
      })
      await page.waitForLoadState('domcontentloaded')
   })
   await test.step("Verify success message 'Success! Your details have been submitted successfully.' is visible",async()=>{
      await page.waitForSelector(Prac.SuccessAlertContactUs)
      await expect(await page.locator(Prac.SuccessAlertContactUs)).toBeVisible()
   })
   await test.step("Click 'Home' button and verify that landed to home page successfully",async()=>{
      await page.click(Prac.HomeButton)
      await page.waitForLoadState('domcontentloaded')
      await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
   })
})
test("SN_7 Verify Test Cases Page",async()=>{
   await test.step("User creates a context",async()=>{
      browser=await chromium.launch({headless:true});
      context= await browser.newContext();
      page=await context.newPage();
    })
    let Prac= new PracLoc(page)
    await test.step("Navigating to URL",async()=>{
       await page.goto(AppProp.appURI)
    })
   await test.step("Validating Homepage title",async()=>{
      await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
    })
    await test.step("Click on 'Test Cases' button",async()=>{
      await page.click(Prac.TestCases)
    })
    await test.step("Verify user is navigated to test cases page successfully",async()=>{
      await expect(page).toHaveTitle(PracString.Title.TESTCASES)
    })
})
test("SN_8 Verify All Products and product detail page",async()=>{
   await test.step("User creates a context",async()=>{
      browser=await chromium.launch({headless:true});
      context= await browser.newContext();
      page=await context.newPage();
    })
    let Prac= new PracLoc(page)
    await test.step("Navigating to URL",async()=>{
       await page.goto(AppProp.appURI)
    })
   await test.step("Validating Homepage title",async()=>{
      await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
    })
    await test.step("Click on 'Products' button",async()=>{
      await page.click(Prac.Products)
    }) 
    await test.step("Verify user is navigated to ALL PRODUCTS page successfully",async()=>{
      await expect(page).toHaveTitle(PracString.Title.PRODUCTS)
      await page.waitForLoadState('domcontentloaded')
    })
    await test.step("The products list is visible",async()=>{
      let loc=await page.locator(Prac.AllProductsList).elementHandles()
      for(let i=0;i<loc.length;i++){
         const element = loc[i]
         const isVisible= await element.isVisible()
         expect(isVisible).toBe(true)
      }
    })
    await test.step("Click on 'View Product' of first product",async()=>{
         await page.click("(//a[contains(text(),'View Product')])[1]")
    })
    await test.step("User is landed to product detail page",async()=>{
      await expect(page).toHaveTitle(PracString.Title.PRODUCTDETAILS)
    })
    await test.step(" Verify that detail detail is visible: product name, category, price, availability, condition, brand",async()=>{
         await expect(await page.locator(Prac.ProductNameProductDetails)).toBeVisible()
         await expect(await page.locator(Prac.CategoryProductDetails)).toBeVisible()
         await expect(await page.locator(Prac.PriceProductDetails)).toBeVisible()
         await expect(await page.locator(Prac.AvailabilityProductDetails)).toBeVisible()
         await expect(await page.locator(Prac.ConditionProductDetails)).toBeVisible()
         await expect(await page.locator(Prac.BrandProductDetails)).toBeVisible()
    })
})
test("SN_9 Search Product",async()=>{
   await test.step("User creates a context",async()=>{
      browser=await chromium.launch({headless:true});
      context= await browser.newContext();
      page=await context.newPage();
    })
    let Prac= new PracLoc(page)
    await test.step("Navigating to URL",async()=>{
       await page.goto(AppProp.appURI)
    })
   await test.step("Validating Homepage title",async()=>{
      await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
    })
    await test.step("Click on 'Products' button",async()=>{
      await page.click(Prac.Products)
    }) 
    await test.step("Verify user is navigated to ALL PRODUCTS page successfully",async()=>{
      await expect(page).toHaveTitle(PracString.Title.PRODUCTS)
      await page.waitForLoadState('domcontentloaded')
    })
    await test.step("Enter product name in search input and click search button",async()=>{
      await page.fill(Prac.SearchField,"Tshirt")
      await page.click(Prac.SearchButton)
    }) 
    await test.step("Verify 'SEARCHED PRODUCTS' is visible",async()=>{
      await expect(await page.locator(Prac.SearchedProductlabel)).toBeVisible()      
    })
    await test.step("Verify all the products related to search are visible",async()=>{
      let loc=await page.locator(Prac.AllProductsList).elementHandles()
      for(let i=0;i<loc.length;i++){
         const element = loc[i]
         const isVisible= await element.isVisible()
         expect(isVisible).toBe(true)
      }
    })
})
test("SN_10 Verify Subscription in home page",async()=>{
   await test.step("User creates a context",async()=>{
      browser=await chromium.launch({headless:true});
      context= await browser.newContext();
      page=await context.newPage();
    })
    let Prac= new PracLoc(page)
    await test.step("Navigating to URL",async()=>{
       await page.goto(AppProp.appURI)
    })
   await test.step("Validating Homepage title",async()=>{
      await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
    })
    await test.step("Scroll down to footer",async()=>{
      await page.evaluate(() => {
         window.scrollTo(0, document.body.scrollHeight);
       });
    }) 
    await test.step("Verify text 'SUBSCRIPTION'",async()=>{
      await Prac.text_match(Prac.SubscriptionLabel,"Subscription")
      await expect(await page.locator(Prac.SubscriptionLabel)).toBeVisible()
    })
    let Email_Subscription=  await Prac.generateRandomEmail()
    await test.step("Enter email address in input and click arrow button",async()=>{
      await page.fill(Prac.SubsciptionEmailField,Email_Subscription)
      await page.click(Prac.SubscriptionArrow)
    })
    await test.step("Verify success message 'You have been successfully subscribed!' is visible",async()=>{
      await Prac.text_match(Prac.SubscriptionSucess,"You have been successfully subscribed!")
      await expect(await page.locator(Prac.SubscriptionSucess)).toBeVisible()
    })
})
await test("SN_11 Verify Subscription in Cart page",async()=>{
   await test.step("User creates a context",async()=>{
      browser=await chromium.launch({headless:true});
      context= await browser.newContext();
      page=await context.newPage();
    })
    let Prac= new PracLoc(page)
    await test.step("Navigating to URL",async()=>{
       await page.goto(AppProp.appURI)
    })
   await test.step("Validating Homepage title",async()=>{
      await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
    })
    await test.step("Click 'Cart' button",async()=>{
      await page.click(Prac.Cart)
      await expect(page).toHaveTitle(PracString.Title.CART)
    })
    await test.step("Scroll down to footer",async()=>{
      await page.evaluate(() => {
         window.scrollTo(0, document.body.scrollHeight);
       });
    })
    await test.step("Verify text 'SUBSCRIPTION'",async()=>{
      await Prac.text_match(Prac.SubscriptionLabel,"Subscription")
      await expect(await page.locator(Prac.SubscriptionLabel)).toBeVisible()
    })
    let Email_Subscription=  await Prac.generateRandomEmail()
    await test.step("Enter email address in input and click arrow button",async()=>{
      await page.fill(Prac.SubsciptionEmailField,Email_Subscription)
      await page.click(Prac.SubscriptionArrow)
    })
    await test.step("Verify success message 'You have been successfully subscribed!' is visible",async()=>{
      await Prac.text_match(Prac.SubscriptionSucess,"You have been successfully subscribed!")
      await expect(await page.locator(Prac.SubscriptionSucess)).toBeVisible()
    })
})
test("SN_12 Add Products in Cart",async()=>{
   await test.step("User creates a context",async()=>{
      browser=await chromium.launch({headless:true});
      context= await browser.newContext();
      page=await context.newPage();
    })
    let Prac= new PracLoc(page)
    await test.step("Navigating to URL",async()=>{
       await page.goto(AppProp.appURI)
    })
   await test.step("Validating Homepage title",async()=>{
      await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
    })
    await test.step("Click on 'Products' button",async()=>{
      await page.click(Prac.Products)
      await expect(page).toHaveTitle(PracString.Title.PRODUCTS)
    }) 
    await test.step("Hover over first product and click 'Add to cart'",async()=>{
         await page.hover("//img[@src='/get_product_picture/1']")
         await page.click("(//a[@class='btn btn-default add-to-cart'][normalize-space()='Add to cart'])[2]")
    }) 
    await test.step("Click 'Continue Shopping' button",async()=>{
         await page.click("//button[normalize-space()='Continue Shopping']")
    })
    await test.step("Hover over second product and click 'Add to cart'",async()=>{
         await page.hover("//img[@src='/get_product_picture/2']")
         await page.click("(//a[@class='btn btn-default add-to-cart'][normalize-space()='Add to cart'])[4]")
    })
    await test.step(" Click 'View Cart' button",async()=>{
         await page.click("//u[normalize-space()='View Cart']")
    })
    let cartItems;
    await test.step("Verify both products are added to Cart",async()=>{
      await expect(page).toHaveTitle(PracString.Title.CART)
       cartItems = page.locator("//td[@class='cart_description']");
      await expect(cartItems).toHaveCount(2);
    })
    await test.step("Verify their prices, quantity and total price",async()=>{
      const productPrices = await page.locator("//td[@class='cart_price']").evaluateAll(elements => elements.map(el => el.innerText.trim()));
      const productQuantities = await page.locator("//td[@class='cart_quantity']").evaluateAll(elements => elements.map(el => el.innerText.trim()));
      const productTotals = await page.locator("//td[@class='cart_total']").evaluateAll(elements => elements.map(el => el.innerText.trim()));

      const expectedPrices = ['Rs. 500', 'Rs. 400']; 
      const expectedQuantities = ['1', '1']; 
      const expectedTotals = ['Rs. 500', 'Rs. 400'];

      for (let i = 0; i < productPrices.length; i++) {
         expect(productPrices[i].trim()).toBe(expectedPrices[i]);
         expect(productQuantities[i].trim()).toBe(expectedQuantities[i]);
         expect(productTotals[i].trim()).toBe(expectedTotals[i]);
       }
    })
})
test("SN_13  Verify Product quantity in Cart",async()=>{
   await test.step("User creates a context",async()=>{
      browser=await chromium.launch({headless:true});
      context= await browser.newContext();
      page=await context.newPage();
    })
    let Prac= new PracLoc(page)
    await test.step("Navigating to URL",async()=>{
       await page.goto(AppProp.appURI)
    })
   await test.step("Validating Homepage title",async()=>{
      await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
    })
    await test.step("Click 'View Product' for any product on home page",async()=>{
      await page.click("(//a[contains(text(),'View Product')])[1]")
    })
    await test.step("Verify product detail is opened",async()=>{
      await expect(page).toHaveTitle(PracString.Title.PRODUCTDETAILS)
    })
    await test.step("Increase quantity to 4",async()=>{
      await page.fill("//input[@id='quantity']","4")
    })
    await test.step(" Click 'Add to cart' button",async()=>{
      await page.click("//button[normalize-space()='Add to cart']")
    })
    await test.step("Click 'View Cart' button",async()=>{
      await page.click("//u[normalize-space()='View Cart']")
    })
    await test.step("Verify that product is displayed in cart page with exact quantity",async()=>{
      await expect(page).toHaveTitle(PracString.Title.CART)
      const cartItem = page.locator("//td[@class='cart_description']");
      await expect(cartItem).toBeVisible();

      const cartQuantity = await page.locator("//td[@class='cart_quantity']").innerText();
      expect(cartQuantity.trim()).toBe('4');
    })
})
test("SN_14 Place Order: Register while Checkout",async()=>{
   await test.step("User creates a context",async()=>{
      browser=await chromium.launch({headless:true});
      context= await browser.newContext();
      page=await context.newPage();
    })
    let Prac= new PracLoc(page)
    await test.step("Navigating to URL",async()=>{
       await page.goto(AppProp.appURI)
    })
   await test.step("Validating Homepage title",async()=>{
      await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
    })
    await test.step("Add product to cart",async()=>{
      await page.hover("//img[@src='/get_product_picture/1']")
      await page.click("(//a[@class='btn btn-default add-to-cart'][normalize-space()='Add to cart'])[2]")
      await page.click("//button[normalize-space()='Continue Shopping']")
 })     
   await test.step("Click 'Cart' button",async()=>{
      await page.click(Prac.Cart)
   })
   await test.step(" Verify that cart page is displayed",async()=>{
      await expect(page).toHaveTitle(PracString.Title.CART)
   })
   await test.step("Click Proceed To Checkout",async()=>{
      await page.click("//a[normalize-space()='Proceed To Checkout']")
   })
   await test.step(" Click 'Register / Login' button",async()=>{
      await page.click("//u[normalize-space()='Register / Login']")
   })
   let Email_Test= await Prac.generateRandomEmail()
   let Name_Test = PracString.getRandomName()
   await test.step("Fill all details in Signup and create account",async()=>{
      await page.fill(Prac.SignUpName,Name_Test.fullname)
      await page.fill(Prac.SignUpEmail,Email_Test)
      await page.click(Prac.SignUpButton)
      await page.waitForLoadState('domcontentloaded')
      await page.click(Prac.MrCheckbox)
      await page.fill(Prac.PasswordSignUpForm,PracString.Userdata.NEW_USER_PASSWORD)
      await page.selectOption(Prac.DateDOBSignUpForm,"14")
      await page.selectOption(Prac.MonthDOBSignUpForm,"10")
      await page.selectOption(Prac.YearDOBSignUpForm,"1996")
      await page.click(Prac.NewsletterCheckboxSignUpForm)
      await page.click(Prac.RecieveSpecialOfferCheckbox)
      await page.fill(Prac.FirstNameSignUpForm,Name_Test.firstName)
      await page.fill(Prac.LastNameSignUpForm,Name_Test.lastName)
      await page.fill(Prac.CompanySignUpForm,PracString.Userdata.COMPANY)
      await page.fill(Prac.Address1SignUpForm,PracString.Userdata.ADDRESS)
      await page.fill(Prac.StateSignUpForm,PracString.Userdata.STATE)
      await page.fill(Prac.CitySignUpForm,PracString.Userdata.CITY)
      await page.fill(Prac.ZipCodeSignUpForm,PracString.Userdata.ZIPCODE)
      await page.fill(Prac.MobileSignUpForm,PracString.Userdata.MOBILE)
      await page.click(Prac.CreateAccountButtonSignUpForm)
   })
   await test.step("Verify that 'ACCOUNT CREATED!' is visible",async()=>{
      await expect(await page.locator(Prac.AccountCreatedLabel)).toBeVisible()
    })
   await test.step("Click 'Continue' button",async()=>{
      await page.click(Prac.ContinueButtonAccountCreated)
   })
   await test.step("Verify that 'Logged in as username' is visible",async()=>{
      await Prac.text_match(Prac.LoggedInAsLabel," Logged in as "+Name_Test.fullname)
      await expect(await page.locator(Prac.LoggedInAsLabel)).toBeVisible()
   })
   await test.step("Click 'Cart' button",async()=>{
      await page.click(Prac.Cart)
   })
   await test.step("Click 'Proceed To Checkout' button",async()=>{
      await page.click("//a[normalize-space()='Proceed To Checkout']")
   })
   await test.step("Verify Address Details and Review Your Order",async()=>{

   })
   await test.step("Enter description in comment text area and click 'Place Order'",async()=>{
      await page.fill("//textarea[@name='message']","These products are mine")
      await page.click("//a[normalize-space()='Place Order']")
   })
   await test.step("Enter payment details: Name on Card, Card Number, CVC, Expiration date",async()=>{
      await page.fill("//input[@name='name_on_card']",PracString.Card_Details.NAME)
      await page.fill("//input[@name='card_number']",PracString.Card_Details.CARD_NUM)
      await page.fill("//input[@data-qa='cvc']",PracString.Card_Details.CVC)
      await page.fill("//input[@data-qa='expiry-month']",PracString.Card_Details.EXPIRATION_MM)
      await page.fill("//input[@data-qa='expiry-year']",PracString.Card_Details.EXPIRATION_YYYY)
   })
   await test.step("Click 'Pay and Confirm Order' button",async()=>{
      await page.click("//button[@data-qa='pay-button']")
   })
   await test.step("Verify success message 'Your order has been placed successfully!'",async()=>{
      await Prac.text_match("//div[@id='success_message']","Your order has been placed successfully!")
      await expect(await page.locator("//div[@id='success_message']")).toBeVisible()
   })
   await test.step("Click 'Delete Account' button",async()=>{
      await page.click(Prac.DeleteAccount)
   })
   await test.step(" Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button",async()=>{
      await expect(await page.locator(Prac.AccountDeleteLabel)).toBeVisible()
      await page.click(Prac.ContinueButtonAccountCreated)
   })
   await test.step("Closing context",async()=>{
      await context.close()
   })
})
test("SN_15  Place Order: Register before Checkout",async()=>{
   await test.step("User creates a context",async()=>{
      browser=await chromium.launch({headless:true});
      context= await browser.newContext();
      page=await context.newPage();
    })
    let Prac= new PracLoc(page)
    await test.step("Navigating to URL",async()=>{
       await page.goto(AppProp.appURI)
    })
   await test.step("Validating Homepage title",async()=>{
      await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
    })
    await test.step("Click 'Signup / Login' button",async()=>{
      await page.click(Prac.SignupLoginButton)
    })
    let Email_Test= await Prac.generateRandomEmail()
    let Name_Test = PracString.getRandomName()
    await test.step("Fill all details in Signup and create account",async()=>{
       await page.fill(Prac.SignUpName,Name_Test.fullname)
       await page.fill(Prac.SignUpEmail,Email_Test)
       await page.click(Prac.SignUpButton)
       await page.waitForLoadState('domcontentloaded')
       await page.click(Prac.MrCheckbox)
       await page.fill(Prac.PasswordSignUpForm,PracString.Userdata.NEW_USER_PASSWORD)
       await page.selectOption(Prac.DateDOBSignUpForm,"14")
       await page.selectOption(Prac.MonthDOBSignUpForm,"10")
       await page.selectOption(Prac.YearDOBSignUpForm,"1996")
       await page.click(Prac.NewsletterCheckboxSignUpForm)
       await page.click(Prac.RecieveSpecialOfferCheckbox)
       await page.fill(Prac.FirstNameSignUpForm,Name_Test.firstName)
       await page.fill(Prac.LastNameSignUpForm,Name_Test.lastName)
       await page.fill(Prac.CompanySignUpForm,PracString.Userdata.COMPANY)
       await page.fill(Prac.Address1SignUpForm,PracString.Userdata.ADDRESS)
       await page.fill(Prac.StateSignUpForm,PracString.Userdata.STATE)
       await page.fill(Prac.CitySignUpForm,PracString.Userdata.CITY)
       await page.fill(Prac.ZipCodeSignUpForm,PracString.Userdata.ZIPCODE)
       await page.fill(Prac.MobileSignUpForm,PracString.Userdata.MOBILE)
       await page.click(Prac.CreateAccountButtonSignUpForm)
    })
    await test.step("Verify that 'ACCOUNT CREATED!' is visible",async()=>{
       await expect(await page.locator(Prac.AccountCreatedLabel)).toBeVisible()
     })
    await test.step("Click 'Continue' button",async()=>{
       await page.click(Prac.ContinueButtonAccountCreated)
    })
    await test.step("Verify that 'Logged in as username' is visible",async()=>{
       await Prac.text_match(Prac.LoggedInAsLabel," Logged in as "+Name_Test.fullname)
       await expect(await page.locator(Prac.LoggedInAsLabel)).toBeVisible()
    })
    await test.step("Add product to cart",async()=>{
      await page.hover("//img[@src='/get_product_picture/1']")
      await page.click("(//a[@class='btn btn-default add-to-cart'][normalize-space()='Add to cart'])[2]")
      await page.click("//button[normalize-space()='Continue Shopping']")
 })     
   await test.step("Click 'Cart' button",async()=>{
      await page.click(Prac.Cart)
   })
   await test.step(" Verify that cart page is displayed",async()=>{
      await expect(page).toHaveTitle(PracString.Title.CART)
   })
   await test.step("Click Proceed To Checkout",async()=>{
      await page.click("//a[normalize-space()='Proceed To Checkout']")
   })
   await test.step("Verify Address Details and Review Your Order",async()=>{

   })
   await test.step("Enter description in comment text area and click 'Place Order'",async()=>{
      await page.fill("//textarea[@name='message']","These products are mine")
      await page.click("//a[normalize-space()='Place Order']")
   })
   await test.step("Enter payment details: Name on Card, Card Number, CVC, Expiration date",async()=>{
      await page.fill("//input[@name='name_on_card']",PracString.Card_Details.NAME)
      await page.fill("//input[@name='card_number']",PracString.Card_Details.CARD_NUM)
      await page.fill("//input[@data-qa='cvc']",PracString.Card_Details.CVC)
      await page.fill("//input[@data-qa='expiry-month']",PracString.Card_Details.EXPIRATION_MM)
      await page.fill("//input[@data-qa='expiry-year']",PracString.Card_Details.EXPIRATION_YYYY)
   })
   await test.step("Click 'Pay and Confirm Order' button",async()=>{
      await page.click("//button[@data-qa='pay-button']")
   })
   await test.step("Verify success message 'Your order has been placed successfully!'",async()=>{
      await Prac.text_match("//div[@id='success_message']","Your order has been placed successfully!")
      await expect(await page.locator("//div[@id='success_message']")).toBeVisible()
   })
   await test.step("Click 'Delete Account' button",async()=>{
      await page.click(Prac.DeleteAccount)
   })
   await test.step(" Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button",async()=>{
      await expect(await page.locator(Prac.AccountDeleteLabel)).toBeVisible()
      await page.click(Prac.ContinueButtonAccountCreated)
   })
   await test.step("Closing context",async()=>{
      await context.close()
   })
})
test("SN_16 Place Order: Login before Checkout",async()=>{
   await test.step("User creates a context",async()=>{
      browser=await chromium.launch({headless:true});
      context= await browser.newContext();
      page=await context.newPage();
   })
   let Prac= new PracLoc(page)
   await test.step("Navigating to URL",async()=>{
      await page.goto(AppProp.appURI)
   })
   await test.step("Validating Homepage title",async()=>{
      await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
   })
   await test.step("Click on Login/Signup Button",async()=>{
      await page.click(Prac.SignupLoginButton)
   })
   await test.step("Verify 'Login to your account' is visible",async()=>{
      await expect(await page.locator(Prac.LoginToYourAccLabel)).toBeVisible()
   })
   await test.step("Enter correct email address and password",async()=>{
      await page.fill(Prac.EmailLogin,Email)
      await page.fill(Prac.PasswordLogin,PracString.Userdata.NEW_USER_PASSWORD)
   })
   await test.step("Click 'login' button",async()=>{
      await page.click(Prac.LoginButton)
   })
   await test.step("Verify that 'Logged in as username' is visible",async()=>{
      await Prac.text_match(Prac.LoggedInAsLabel," Logged in as "+Name.fullname)
   await expect(await page.locator(Prac.LoggedInAsLabel)).toBeVisible()
   })
   await test.step("Add product to cart",async()=>{
      await page.hover("//img[@src='/get_product_picture/1']")
      await page.click("(//a[@class='btn btn-default add-to-cart'][normalize-space()='Add to cart'])[2]")
      await page.click("//button[normalize-space()='Continue Shopping']")
 })     
   await test.step("Click 'Cart' button",async()=>{
      await page.click(Prac.Cart)
   })
   await test.step(" Verify that cart page is displayed",async()=>{
      await expect(page).toHaveTitle(PracString.Title.CART)
   })
   await test.step("Click Proceed To Checkout",async()=>{
      await page.click("//a[normalize-space()='Proceed To Checkout']")
   })
   await test.step("Verify Address Details and Review Your Order",async()=>{

   })
   await test.step("Enter description in comment text area and click 'Place Order'",async()=>{
      await page.fill("//textarea[@name='message']","These products are mine")
      await page.click("//a[normalize-space()='Place Order']")
   })
   await test.step("Enter payment details: Name on Card, Card Number, CVC, Expiration date",async()=>{
      await page.fill("//input[@name='name_on_card']",PracString.Card_Details.NAME)
      await page.fill("//input[@name='card_number']",PracString.Card_Details.CARD_NUM)
      await page.fill("//input[@data-qa='cvc']",PracString.Card_Details.CVC)
      await page.fill("//input[@data-qa='expiry-month']",PracString.Card_Details.EXPIRATION_MM)
      await page.fill("//input[@data-qa='expiry-year']",PracString.Card_Details.EXPIRATION_YYYY)
   })
   await test.step("Click 'Pay and Confirm Order' button",async()=>{
      await page.click("//button[@data-qa='pay-button']")
   })
   await test.step("Verify success message 'Your order has been placed successfully!'",async()=>{
      await Prac.text_match("//div[@id='success_message']","Your order has been placed successfully!")
      await expect(await page.locator("//div[@id='success_message']")).toBeVisible()
   })
   await test.step("Click 'Delete Account' button",async()=>{
      await page.click(Prac.DeleteAccount)
   })
   await test.step(" Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button",async()=>{
      await expect(await page.locator(Prac.AccountDeleteLabel)).toBeVisible()
      await page.click(Prac.ContinueButtonAccountCreated)
   })
   await test.step("Closing context",async()=>{
      await context.close()
   })
})
test("SN_17 Remove Products From Cart",async()=>{
   await test.step("User creates a context",async()=>{
      browser=await chromium.launch({headless:true});
      context= await browser.newContext();
      page=await context.newPage();
   })
   let Prac= new PracLoc(page)
   await test.step("Navigating to URL",async()=>{
      await page.goto(AppProp.appURI)
   })
   await test.step("Validating Homepage title",async()=>{
      await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
   })
   await test.step("Add product to cart",async()=>{
      await page.hover("//img[@src='get_product_picture/1']")
      await page.click("(//a[@class='btn btn-default add-to-cart'][normalize-space()='Add to cart'])[2]")
      await page.click("//button[normalize-space()='Continue Shopping']")
      await page.hover("//img[@src='get_product_picture/2']")
      await page.click("(//a[@class='btn btn-default add-to-cart'][normalize-space()='Add to cart'])[4]")
      await page.click("//button[normalize-space()='Continue Shopping']")
   })     
   await test.step("Click 'Cart' button",async()=>{
      await page.click(Prac.Cart)
   })
   await test.step(" Verify that cart page is displayed",async()=>{
      await expect(page).toHaveTitle(PracString.Title.CART)
   })
   await test.step("Click 'X' button corresponding to particular product",async()=>{
      await page.locator("//a[@class='cart_quantity_delete']/i").nth(0).click()
   })
await test.step("Verify that product is removed from the cart",async()=>{
   await expect(await page.locator("//img[@src='get_product_picture/1']")).not.toBeVisible()
   })
   await test.step("Closing context",async()=>{
      await context.close()
   })
})
test("SN_18 View Category Products",async()=>{
   await test.step("User creates a context",async()=>{
      browser=await chromium.launch({headless:true});
      context= await browser.newContext();
      page=await context.newPage();
   })
   let Prac= new PracLoc(page)
   await test.step("Navigating to URL",async()=>{
      await page.goto(AppProp.appURI)
   })
   await test.step("Validating Homepage title",async()=>{
      await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
   })
   await test.step("Verify that categories are visible on left side bar",async()=>{
      await expect(await page.locator("//h2[normalize-space()='Category']")).toBeVisible()
      await expect(await page.locator("//div[@id='accordian']")).toBeVisible()
   })
   await test.step("Click on 'Women' category",async()=>{
      await page.click("//a[normalize-space()='Women']")
   })
   await test.step("Click on any category link under 'Women' category, for example: Dress",async()=>{
      await page.click("//div[@id='Women']//a[contains(text(),'Dress')]")
   })
   await test.step("Verify that category page is displayed and confirm text 'WOMEN - DRESS PRODUCTS'",async()=>{
      await expect(page).toHaveTitle(PracString.Title.WOMAN_DRESS)
   })
   await test.step("On left side bar, click on any sub-category link of 'Men' category",async()=>{
      await page.click("//a[normalize-space()='Men']")
      await page.click("//a[normalize-space()='Jeans']")
   })
   await test.step("Verify that user is navigated to that category page",async()=>{
      await expect(page).toHaveTitle(PracString.Title.MEN_JEANS)
   })
   await test.step("Closing context",async()=>{
      await context.close()
   })
})
test("SN_19 View & Cart Brand Products",async()=>{
   await test.step("User creates a context",async()=>{
      browser=await chromium.launch({headless:true});
      context= await browser.newContext();
      page=await context.newPage();
    })
    let Prac= new PracLoc(page)
    await test.step("Navigating to URL",async()=>{
       await page.goto(AppProp.appURI)
    })
   await test.step("Validating Homepage title",async()=>{
      await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
    })
    await test.step("Click on 'Products' button",async()=>{
      await page.click(Prac.Products)
      await expect(page).toHaveTitle(PracString.Title.PRODUCTS)
    }) 
    await test.step("Verify that Brands are visible on left side bar",async()=>{
      await expect(await page.locator("//div[@class='brands-name']")).toBeVisible()
    })
    await test.step("Click on any brand name",async()=>{
      await page.click("//a[@href='/brand_products/Madame']")
    })
    await test.step("Verify that user is navigated to brand page and brand products are displayed",async()=>{
      await expect(page).toHaveTitle(PracString.Title.BRAND_MADAME)
      await expect(await page.locator("//h2[normalize-space()='Brand - Madame Products']")).toBeVisible()      
    })
    await test.step("On left side bar, click on any other brand link",async()=>{
      await page.click("//a[@href='/brand_products/Polo']")
    })
    await test.step("Verify that user is navigated to that brand page and can see products",async()=>{
      await expect(page).toHaveTitle(PracString.Title.BRAND_POLO)
      await expect(await page.locator("//div[@class='features_items']")).toBeVisible()
    })
    await test.step("Closing context",async()=>{
      await context.close()
   })
})
test("SN_20 Search Products and Verify Cart After Login",async()=>{
   await test.step("User creates a context",async()=>{
      browser=await chromium.launch({headless:true});
      context= await browser.newContext();
      page=await context.newPage();
    })
    let Prac= new PracLoc(page)
    await test.step("Navigating to URL",async()=>{
       await page.goto(AppProp.appURI)
    })
   await test.step("Validating Homepage title",async()=>{
      await expect(page).toHaveTitle(PracString.Title.HOMEPAGE)
    })
    await test.step("Click on 'Products' button",async()=>{
      await page.click(Prac.Products)
      await expect(page).toHaveTitle(PracString.Title.PRODUCTS)
    }) 
    await test.step("Verify user is navigated to ALL PRODUCTS page successfully",async()=>{
      await expect(page).toHaveTitle(PracString.Title.PRODUCTS)
    })
    await test.step("Enter product name in search input and click search button",async()=>{
         await page.fill(Prac.SearchField,"Polo")
    })
})
})