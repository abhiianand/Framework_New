// import {test ,expect} from '@playwright/test';
// import AppProp from '../Properties/AppProp.json'
// import UserDetails from '../Properties/UserDetails.json'
// import Summus_Label from '../Utilities/Summus.js'
// import Summus_Locator from '../locators/Summus.page.js';
// import RandomString from '../Utilities/RamdomStringGenerator/StringGenerator.js'
// import Common from '../Utilities/common.js';
// // import RandomString from '../../Utilities/RamdomStringGenerator/StringGenerator.js';
// // import Common from '../../Utilities/common.js';

// const {chromium}= require('@playwright/test');
 
// let context;
// let page;
// let browser;
// test.describe.serial("Summus Operations User creation ", async() => {
//  test("ST_357 Verify admin can successfully create a Summus Operations User. @aa", async () =>{
//     await test.step("User creates a context",async() =>{
//     browser=await chromium.launch({headless:true});
//     context= await browser.newContext();
//     page=await context.newPage();
//  })
// let SummusLoc= new  Summus_Locator(page); 
// await test.step("User naviagtes to the website",async() => {
//     await page.goto(AppProp.appURI2)
//     await expect(page).toHaveTitle(Summus_Label.Title.LOGIN, {timeout : AppProp.timeout.min})
// })
// await test.step("User is able to login to the platform",async () =>{
//         await SummusLoc.Loginuser(UserDetails.summusAdminUser.name,UserDetails.summusAdminUser.password);
// })

// await test.step("User click on Entity dropdown",async()=>{
//     await page.click(SummusLoc.Entity)
// })
// await test.step("User click on Entity Editor Option",async()=>{
//     await page.click(SummusLoc.EntityEditor)
//     await page.waitForLoadState('domcontentloaded')
    
//     let text_content= await page.textContent(SummusLoc.EntityEditorLabel,{timeout : AppProp.timeout.max})
//    // await page.waitForLoadState('domcontentloaded')
//     await expect(text_content).toBe(Summus_Label.Title.EntityEditorLabel)
// })

// await test.step("Clicking on Create New Person option", async()=>{
//     await page.click(SummusLoc.CreateNewPerson)
//     let text_content=await page.textContent(SummusLoc.CreateNewPersonLabel,{timeout : AppProp.timeout.max})
//     await expect(text_content).toBe(Summus_Label.Title.CreateNewPersonLabel)
// })
// await test.step("Clicking on Create Other types of user option",async()=>{
//     await page.click(SummusLoc.CreateOtherTypeUser)
//     await page.waitForLoadState('domcontentloaded')
//     let text_content= await page.textContent(SummusLoc.CreateOtherTypeUserLabel)
//     expect(text_content).toBe(Summus_Label.Title.CreateNewPersonLabel)
   
// })
// await test.step("Selecting create summus user as Yes ",async()=>{
//     await page.click(SummusLoc.CreateSummusUserYes)
//     await page.waitForLoadState('domcontentloaded')
//     let text_content=await page.textContent(SummusLoc.PersonTypeLabel)
//     expect(text_content).toBe(Summus_Label.Title.PERSONTYPELABEL)
// })
// await test.step("Select Summus Operation Option under Person Type dropdown",async()=>{
//     await page.waitForLoadState('domcontentloaded')
//    // await page.click(SummusLoc.PersonType)
//     let dropdown =await page.$(SummusLoc.PersonType)
//     await dropdown.selectOption({ value: 'Summus Operations' });
//    // await page.fill(SummusLoc.FullNameField,'Operation Test User')
// })
// await test.step("Adding value to Full Name & Email Field", async()=>{
//     await page.fill(SummusLoc.FullNameField,RandomString.getRandomName())
//     await page.fill(SummusLoc.EmailField,OperationUser.Userdata.EMAIL)
// })
// await test.step("Clicking on Create Person button", async()=>{
//     await page.click(SummusLoc.CreatePersonButton)
//     await page.waitForLoadState('domcontentloaded')
// })
// await test.step("Validating account got created succefully and navigated to Basic Info page", async()=>{
//     let text_content= await page.textContent(SummusLoc.NameLabel,{timeout : AppProp.timeout.max})
//     expect(text_content).toBe(Summus_Label.Title.NAMELABEL)
// })
// await test.step("Navigating to Account section",async()=>{
//     await page.click(SummusLoc.AccountLeftNav)
//     let text_content=await page.textContent(SummusLoc.UserInfolabel)
//     expect(text_content).toBe(Summus_Label.Title.USERINFOLABEL)
//     await page.waitForLoadState('domcontentloaded')
// })
// let url
// await test.step("Copying the new user token",async()=>{
//     const locator = page.locator('[data-testid="link-new-user-token"]');
//     url = await locator.getAttribute('data-testid-copy-text');
// })
// await test.step("Closing the context",async()=>{
//     await context.close()
// })
// await test.step("Opening new context and navigating to new user token URL",async()=>{
//     context= await browser.newContext();
//     page=await context.newPage();
//     await page.goto(url)
// })
// SummusLoc= new  Operationuser(page);
// await test.step("completing user sign-up by adding password",async()=>{
//     await page.fill(SummusLoc.CreateNewPasswordfield,OperationUser.Userdata.NEW_USER_PASSWORD)
//     await page.fill(SummusLoc.RetypeNewPasswordfield,OperationUser.Userdata.NEW_USER_PASSWORD)
//     await page.click(SummusLoc.Checkbox1)
//     await page.click(SummusLoc.Checkbox2)
//     await page.click(SummusLoc.Signupbutton)
// })
// await test.step('Logout from the session',async()=>{

//     await page.click(SummusLoc.LogoutButton,{timeout : AppProp.timeout.max})
//   //  await page.waitForLoadState('load');

// })
// await test.step("Login to the session again",async()=>{
//     //await page.waitForLoadState('load');
//     await page.waitForLoadState('domcontentloaded')
//     await SummusLoc.Loginuser(OperationUser.Userdata.EMAIL,OperationUser.Userdata.NEW_USER_PASSWORD);
//     await expect(page).toHaveTitle(PageTitles.Title.HOME, {timeout : AppProp.timeout.min})
// })
// await test.step("Closing the context",async()=>{
//     await context.close()
// })
// })
// test('ST_358 -Verify for Operations User: cannot create a case ,no action items available on dashboard, cannot delete cases, cannot open any cases & cannot access any member profile @aa', async () =>{
//     await test.step("User creates a context",async() =>{
//     browser=await chromium.launch({headless:true});
//     context= await browser.newContext();
//     page=await context.newPage();
//  })
//     let SummusLoc= new  Summus_Locator(page);
//     await test.step("Operation User is getting logged in",async()=>{
//     await page.goto(AppProp.appURI2)
//     await SummusLoc.Loginuser(OperationUser.Userdata.EMAIL,OperationUser.Userdata.NEW_USER_PASSWORD);
//     await expect(page).toHaveTitle(PageTitles.Title.HOME, {timeout : AppProp.timeout.max})
// })
// await test.step("Verifying Operator is not able to create case",async()=>{
//     let locator= page.locator(SummusLoc.Startacasebutton)
//     await expect(locator).toBeHidden()
// })
// await test.step("Validating no action items available on dashboard",async()=>{
//     let locator= page.locator(SummusLoc.MyUpcomingAppoitmentlabel)
//     await expect(locator).toBeHidden()
//     locator=page.locator(SummusLoc.Howcanwehelplabel)
//     expect(locator).toBeHidden()
// })
// await test.step("Navigating to case management",async()=>{
//     await page.click(SummusLoc.Adminleftnav)
//     await page.click(SummusLoc.CaseManagementleftnav)
//     await expect(page).toHaveTitle(Summus_Label.Title.CASEMANANGEMENT)
// })
// await test.step("Validate that operator user cannot delete cases and open cases",async()=>{
//     let locator=await page.locator(SummusLoc.CaseManagementCaseOpenButtons)
//     await expect(locator).toBeHidden()
//     locator=await page.locator(SummusLoc.CaseManagementCaseDeleteButons)
//     await expect(locator).toBeHidden()
// })
// await test.step("Navigating to Entitiy Editor page ",async()=>{
//     await page.waitForLoadState('domcontentloaded')
//     await page.click(SummusLoc.Entity)
//     await page.click(SummusLoc.EntityEditor)
// })
// await test.step("Validating member profile are not getting found on seacrh",async()=>{
//     await page.fill(SummusLoc.EntityEditorSearchField,'Matt Davidson')
//     let loc=await page.locator(SummusLoc.EntitySearchFieldSuggestion)
//     let text_content=await loc.textContent(SummusLoc.EntitySearchFieldSuggestion)
//     expect(text_content).not.toBe('Matt Davidson')
//  })
// await test.step("Closing the context",async()=>{
//     await context.close()
// })
// })
// test('ST_359 -Verify Case Management, Account Management, Invoice Management, Pricing, Physician Recruitment & Data Cleanup options are available for Operation User @aa', async () =>{
//     let admin_option= ["Case Management","Account Management","Data Cleanup","Invoice Management","Physician Recruitment","Payment Approval"]
//     await test.step("User creates a context",async() =>{
//     browser=await chromium.launch({headless:true});
//     context= await browser.newContext();
//     page=await context.newPage();
//  })
//     let SummusLoc= new  Summus_Locator(page);
//     await test.step("Operation User is getting logged in",async()=>{
//     await page.goto(AppProp.appURI2)
//     await SummusLoc.Loginuser(OperationUser.Userdata.EMAIL,OperationUser.Userdata.NEW_USER_PASSWORD);
//     await expect(page).toHaveTitle(PageTitles.Title.HOME, {timeout : AppProp.timeout.max})
// })

// await test.step("Validate options present under Admin",async()=>{
//     await page.click(SummusLoc.Adminleftnav)
    
//     let userdata= await page.locator(SummusLoc.AdminOptionsleftnav).all()    
//     let arr_everything=[];
   
    
//     for( let i=0;i<userdata.length;i++)
//     {
//         let text_content= await userdata[i].textContent()
//         arr_everything.push(text_content) 

//     }
//      await expect(Common.arrayMatch(arr_everything,admin_option)).toBeTruthy()
//     // await expect(arr_everything).toContain(admin_option)
// })
// await test.step("Verify presence of Case Management option by navigating to it",async()=>{
//     await page.click(SummusLoc.CaseManagementleftnav)
//     await page.waitForLoadState('domcontentloaded')
//     await expect(page).toHaveTitle(Summus_Label.Title.CASEMANANGEMENT)
// })
// await test.step("Validate presence of Account Management option by navigating to it",async()=>{
  
//     await page.click(SummusLoc.Adminleftnav)
//     await page.click(SummusLoc.AccountManagementleftnav)
//     await page.waitForLoadState('domcontentloaded')
//     await expect(page).toHaveTitle(Summus_Label.Title.ACCOUNTMANAGEMENT)
// })
// await test.step("Validate presence of Invoice Management option by navigating to it",async()=>{
//     await page.click(SummusLoc.Adminleftnav)
//     await page.click(SummusLoc.InvoiceManagementleftnav)
//     await expect(page).toHaveTitle(Summus_Label.Title.INVOICEMANAGEMENT)
// })
// await test.step("Validate presence of Pricing option by navigating to it",async()=>{
//     await page.click(SummusLoc.Adminleftnav)
//     await page.click(SummusLoc.PhysicianRecruitmentleftnav)
//     await page.waitForLoadState('domcontentloaded')
//     await expect(page).toHaveTitle(Summus_Label.Title.PHYSICIANRECRUITMENT)
// })
// await test.step("Validate presence of Data Cleanup option by navigating to it",async()=>{
//     await page.click(SummusLoc.Adminleftnav)
//     await page.click(SummusLoc.PhysicianRecruitmentleftnav)
//     await expect(page).toHaveTitle(Summus_Label.Title.PHYSICIANRECRUITMENT)
// })
// await test.step("Closing the context",async()=>{
//     await context.close()
// })
// })
// test("ST_360 - Verify operations user can only create Specialists, Non-MD Providers, Pharmacists, and Orgs @aa",async()=>{
//     let typeOfPerson=["Specialist","Non-MD Provider","Pharmacist"]
//     await test.step("User creates a context",async() =>{
//         browser=await chromium.launch({headless:true});
//         context= await browser.newContext();
//         page=await context.newPage();
//      })
//      let SummusLoc= new  Summus_Locator(page);
//      await test.step("Operation User is getting logged in",async()=>{
//      await page.goto(AppProp.appURI2)
//      await SummusLoc.Loginuser(OperationUser.Userdata.EMAIL,OperationUser.Userdata.NEW_USER_PASSWORD);
//      await expect(page).toHaveTitle(PageTitles.Title.HOME, {timeout : AppProp.timeout.max})
//  })     
//  await test.step("Navigating to Entitiy Editor page ",async()=>{
//     await page.waitForLoadState('domcontentloaded')
//     await page.click(SummusLoc.Entity)
//     await page.click(SummusLoc.EntityEditor)
// })
// await test.step("Validate Create new Org option is available",async()=>{
//     let button=await page.locator(SummusLoc.CreateNewOrgButton)
//     expect(button).toBeEnabled()
// })
// await test.step("Navigating to Create New Person",async()=>{
//     await page.click(SummusLoc.CreateNewPerson)
//     expect(page).toHaveTitle(Summus_Label.Title.CREATENEWPERSON)
// })
// await test.step("Validating Type of Person option present to create new person ",async()=>{
//   let locator= await page.locator(SummusLoc.TypeOfPersonOptions).all()  
//   let arr_everything=[];
//   for( let i=0;i<locator.length;i++)
//   {  
//     let text_content= await locator[i].textContent()
//     arr_everything.push(text_content)
//     expect(locator[i]).toBeEnabled()
//   }
//     expect(arr_everything).toStrictEqual(typeOfPerson)
// })
// await test.step("Closing the context",async()=>{
//     await context.close()
// })
// })
// test("ST_511 - Verify  user an create/edit/delete Departments in Hospital Admin page",async()=>{
//     await test.step("User creates a context",async() =>{
//         browser=await chromium.launch({headless:true});
//         context= await browser.newContext();
//         page=await context.newPage();
//      })
//      let SummusLoc= new  Summus_Locator(page);
//      await test.step("Operation User is getting logged in",async()=>{
//      await page.goto(AppProp.appURI2)
//      await SummusLoc.Loginuser(OperationUser.Userdata.PARTNER_USER_EMAIL,OperationUser.Userdata.PARTNER_USER_PASS);
//      await expect(page).toHaveTitle(PageTitles.Title.HOME, {timeout : AppProp.timeout.max})
//      await page.waitForLoadState('domcontentloaded')
//     })  
//     await test.step("Navigating to Account Management",async()=>{
//         await page.click(SummusLoc.Adminleftnav)
//         await page.waitForLoadState('domcontentloaded')
//         await page.click(SummusLoc.AccountManagementleftnav)
//         await page.click(SummusLoc.InstitutionalDocleftnav)
//     })
//     await test.step("User is able to go to Special hosp for surgery", async()=>{
//         await page.locator(SummusLoc.hyperHSS).click()
//         await page.waitForLoadState('domcontentloaded')
//      })

//      await test.step("Admin user switches to account overview tab.", async () => {
       
       
//         await context.waitForEvent('page');
//         const pages = await context.pages();
//         page = pages[1]
//     })
//     SummusLoc= new  Operationuser(page);

//     await test.step("user is able to add a department in Hospital Department",async()=>{
//         await page.waitForLoadState('domcontentloaded')
//         await page.locator(SummusLoc.editbutton).click()
//         await page.locator(SummusLoc.hospdeptfield).fill(OperationUser.Userdata.HOSPITAL_DEPT_VALUE)
//         await page.locator(SummusLoc.savebutton).click();
//         await page.waitForLoadState('domcontentloaded')
//         // await page.waitForTimeout(4000)
//        //  let text=await page.textContent(SummusLoc.filledvaluehospdepartments)
//          //expect(text).toBe(OperationUser.Userdata.HOSPITAL_DEPT_VALUE);
//     })

//     await test.step("User is able to edit value in Hospital Department by adding more values",async()=>{
//        // await expect(page).toHaveTitle(PageTitles.Title.ACCOUNT_OVERVIEW_SPECIALSURGERY)
//       //  await page.waitForLoadState('domcontentloaded')
//         await page.locator(SummusLoc.editbutton).click()
//         await page.locator(SummusLoc.hospdeptfield).fill(OperationUser.Userdata.HOSPITAL_DEPT_VALUES)
//         await page.locator(SummusLoc.savebutton).click();
//         await page.waitForLoadState('domcontentloaded')
//         await page.waitForTimeout(25000)
//         let text=await page.textContent(SummusLoc.filledvaluehospdepartments)
//         expect(text).toBe(OperationUser.Userdata.HOSPITAL_DEPT_VALUES);
//      })
//      await test.step("User is able to delete the entered departments in Hospital Department", async()=>{
//         //await page.locator(locator.filledvaluehospdepartments).click()
//         await page.locator(SummusLoc.editbutton).click()
//         await page.locator(SummusLoc.crossbutton).click();
//         await page.waitForLoadState('domcontentloaded')
//         await page.waitForTimeout(25000)
//         let text1=await page.textContent(SummusLoc.filledvaluehospdepartments)
//         expect(text1).toBe('None')
//         //await expect(page).toHaveTitle(PageTitles.Title.ACCOUNT_OVERVIEW)
//      })
    
 
// })
// })
