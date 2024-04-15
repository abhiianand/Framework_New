export default class RandomString {

  static getRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  static getRandomAphaNumeric(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  static generateRandomNumberBetween(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
  }

  static getRandomName() {
    let name = '';
    let firstName = this.getRandomString(5).toLowerCase();
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    let lastName = this.getRandomString(5).toLowerCase();
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    name = firstName + ' ' + lastName
    return name;
  }

  static getRandomNumber(length) {
    let result = '';
    const characters = '1234567890';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}