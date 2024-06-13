export default class Summus_Locator{
    constructor(page){
        // this.page=page;
        // this.Inputemailaddress="//input[@id='username']"
        // this.button="//button[@type='submit']"
        // this.inputpassword="//input[@id='password']"
        this.page=page
        this.Inputemailaddress="//input[@id='username']"
        this.button="//button[@type='submit']"
        this.inputpassword="//input[@id='password']"
        this.edit="//a[normalize-space()='Edit Profile']"
        this.medicalcase="//button[@value='Medical']"
        this.medicalcasetextarea= "//textarea[@id='StartACaseTextarea']"
        this.medicalcaseuserself="//button[@value='Self']"
        this.medicalcasecontinue="//button[normalize-space()='Continue']"
        this.addnewphone="//button[@data-testid='btn-add-phone-number']"
        this.continue="//button[normalize-space()='Continue']"
        this.medicalcasedescriptionlabel="//label[contains(text(),'In a few sentences, please describe your diagnosis')]"
        this.medicalcasedescriptiontextfield="//textarea[@id='StartACaseTextarea']"
        this.medicalcaseuserselectionlabel="//label[normalize-space()='This is for']"
        this.buttonfamilymember="//button[@value='Other']"
        this.phonenolabel="//label[contains(text(),'Please include your preferred contact number for t')]"
        this.continuebutton="//button[normalize-space()='Continue']"
        this.statementofpractice="//h1[normalize-space()='Statement on Practice of Medicine']"
        this.statementofpracticeback="//button[normalize-space()='Go Back']"
        this.statementofpracticecontinue="//button[@data-testid='btn-acknowledge-policy']"
        this.reviewrequestlabel="//div[@class='tw-flex-grow tw-text-lg tw-font-bold']"
        this.reviewrequestgoback="//button[normalize-space()='Go Back']"
        this.reviewrequestcontinue="//button[normalize-space()='Request Consultation']"
        this.reviewrequestconfirmationthankyou="//div[@class='tw-pt-4 tw-text-2xl']"
        this.reviewrequestuserdata="//div[text()='Review Request']/following::table/tbody/tr/td"
        this.reviewupdateyourprofile="//a[normalize-space()='Complete/Update Your Profile']"
        this.mycases="//a[normalize-space()='My Cases']"
        this.mycaseslabel="//h1[normalize-space()='Consultation History']"
        this.updateprofiletext="//div[@class='tw-text-lg tw-pt-4']"
        this.Entity="//span[normalize-space()='Entity']"
        this.EntityEditor="//a[normalize-space()='Entity Editor']"
        this.EntityEditorLabel="//div[@class='tw-flex-grow']"
        this.CreateNewPerson="//a[normalize-space()='Create New Person']"
        this.CreateNewPersonLabel="//div[@class='tw-flex-grow']"
        this.CreateOtherTypeUser="//a[normalize-space()='Create Other Types of Users']"
        this.CreateOtherTypeUserLabel="//div[@class='tw-flex-grow']"
        this.CreateSummusUserYes="//button[@value='true']"
        this.PersonTypeLabel="//label[normalize-space()='Person Type']"
        this.PersonType="//select[@name='PersonType']"
        this.FullNameField="//input[@name='FullName']"
        this.EmailField="//input[@name='Email']"
        this.CreatePersonButton="//button[normalize-space()='Create Person']"
        this.NameLabel="//h2[normalize-space()='Name']"
        this.AccountLeftNav="//a[normalize-space()='Account']"
        this.UserInfolabel="//h2[normalize-space()='User Info']"
        this.NewUserToken="//span[@class='tw-cursor-pointer']"
        this.URLnewusertoken="//span[@data-testid-copy-text]"
        this.CreateNewPasswordfield="//input[@id='password']"
        this.RetypeNewPasswordfield="//input[@id='confirm']"
        this.Checkbox1="//input[@data-testid='checkbox-gdpr-acknowledgement']"
        this.Checkbox2="//input[@data-testid='checkbox-legal-acknowledgement']"
        this.Signupbutton="//button[normalize-space()='Sign Up']"
        this.LogoutButton="//a[normalize-space()='Logout']"
        this.Startacasebutton="//a[normalize-space()='Start A Case']"
        this.MyUpcomingAppoitmentlabel="//h2[normalize-space()='My Upcoming Appointments']"
        this.Howcanwehelplabel="//label[normalize-space()='How can we help you?']"
        this.Adminleftnav="//span[normalize-space()='Admin']"
        this.CaseManagementleftnav="//a[normalize-space()='Case Management']"
        this.CaseManagementCaseOpenButtons="//a[contains(@data-testid,'btn-open-case')]"
        this.CaseManagementCaseDeleteButons="//button[@data-testid='btn-delete-case']"
        this.EntityEditorSearchField="//input[@id='EntitySearch']"
        this.EntitySearchFieldSuggestion="//div[@id='react-autowhatever-EntitySearch_suggest']"
        this.EntitySearchFieldSuggestionOptions="//div[@id='react-autowhatever-EntitySearch_suggest']/ul/li"
        this.AdminOptionsleftnav="//a[@data-testid='sidebar-admin-group']/following::div/div/ul/li"
        this.AccountManagementleftnav="//a[normalize-space()='Account Management']"
        this.InvoiceManagementleftnav="//a[normalize-space()='Invoice Management']"
        this.PhysicianRecruitmentleftnav="//a[normalize-space()='Physician Recruitment']"
        this.DataCleanupleftnav="//a[normalize-space()='Data Cleanup']"
        this.TypeOfPersonOptions="//div[@data-testid='btn-group-person-type']//div[@class='tw-flex tw-flex-wrap tw-items-stretch']/div"
        this.CreateNewOrgButton="//a[normalize-space()='Create New Org']"
        this.InstitutionalDocleftnav="//a[normalize-space()='Institutional Doc']"
        this.hyperHSS="//td[normalize-space()='Hospital for Special Surgery']"
        this.editbutton="//span[text()='Hospital Departments']/following::button[@data-testid='editable-toggle'][1]"
        this.hospdeptfield="//input[@data-testid='editable-input']"
        this.savebutton="//button[@data-testid='editable-save']"
        this.crossbutton="//button[@aria-label='Delete']"
        this.filledvaluehospdepartments="//span[@data-testid='editable-HospitalDepartments']"
 
    }


async generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(7); 
    const email = `${randomString}@yopmail.com`;
    return email;
}

 async Loginuser(username, password){
        await this.page.locator(this.Inputemailaddress).fill(username);
        await this.page.locator(this.button).click();
        await this.page.locator(this.inputpassword).fill(password);
        await this.page.locator(this.button).click();
        await this.page.waitForLoadState('domcontentloaded');
 
    }
    async FetchTextContentinArray(locator){

        let userdata= await this.page.locator(this.locator).all()    
        let arr_everything=[];
        for( let i=0;i<userdata.length;i++)
        {
            let text_content= await userdata[i].textContent()
            arr_everything.push(text_content) 
        }
        return arr_everything;
    }
   async getUrlParameter(page, parameterName) {
        const url = await page.url();
        const urlParams = new URLSearchParams(new URL(url).search);
        return urlParams.get(parameterName);
    }   
}