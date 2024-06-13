export default class PracString{
    static Title = {
        HOMEPAGE:"Automation Exercise",
        LoginSignUpPage:"Automation Exercise - Signup / Login",
        TESTCASES:"Automation Practice Website for UI Testing - Test Cases",
        PRODUCTS:"Automation Exercise - All Products",
        PRODUCTDETAILS:"Automation Exercise - Product Details",
        CART:"Automation Exercise - Checkout",
        WOMAN_DRESS:"Automation Exercise - Dress Products",
        MEN_JEANS:"Automation Exercise - Jeans Products",
        BRAND_MADAME:"Automation Exercise - Madame Products",
        BRAND_POLO:"Automation Exercise - Polo Products",
        
      }
   static Card_Details={
      NAME:"Alternative Path",
      CARD_NUM:"123456789012",
      CVC:"123",
      EXPIRATION_MM:"01",
      EXPIRATION_YYYY:"2020"
      }
    static Userdata={
        NEW_USER_PASSWORD: "pass@1234",
        COMPANY: "ABC INFOCTECH",
        ADDRESS: "HORIZON CENTRE GURUGRAM",
        CITY:"GURUGRAM",
        STATE: "HARYANA",
        ZIPCODE:"122002",
        MOBILE:"9999999999",
        INCORRECTCREDENTIALERROR: "Your email or password is incorrect!",
         }
         static ContactUs={
            SUBJECT:"This is subject section",
            MESSAGE:"This is messaage section",
         }
         static getRandomString(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
          }
         static getRandomName() {
            let fullname = '';
            let firstName = this.getRandomString(5).toLowerCase();
            firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
            let lastName = this.getRandomString(5).toLowerCase();
            lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
            fullname = firstName + ' ' + lastName
            return {fullname,
             firstName,
             lastName};
          }
}