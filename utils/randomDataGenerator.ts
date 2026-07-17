import { faker } from '@faker-js/faker';

export class DataHelper {
  static allowedCountries = [
    'India',
    'United States',
    'Australia',
    'Israel',
    'New Zealand',
    'Singapore',
  ];

  static allowedColors = [
    'Red',
    'Blue',
    'Green',
  ];

  static getRandomCountry(): string {
    return faker.helpers.arrayElement(this.allowedCountries);
  }

  static getRandomColor(): string {
    return faker.helpers.arrayElement(this.allowedColors);
  }
}

export class RandomDataUtil{

static getFirstName()
{
    return faker.person.firstName();

}

static getlastName()
{
    return faker.person.lastName();
    
}

static getMiddleName()
{
    return faker.person.middleName();
    
}

static getFullName()
{
    return faker.person.fullName();
    
}

static getEmail()
{
    return faker.internet.email();

}

static getPhoneNumber()
{
    return faker.phone.number();

}

 static getUsername(): string {
    return faker.internet.username();

  }

  static getPassword(): string {
    return faker.internet.password();
 }

 
  static getRandomCountry(): string {
    return DataHelper.getRandomCountry();
  }

  static getRandomColor(): string {
    return DataHelper.getRandomColor();
  }

    static getRandomState(): string {
    return faker.location.state();
  }

  static getRandomCity(): string {
    return faker.location.city();
  }

 static getRandomPin(): string {
    return faker.location.zipCode();
  }

    
 static getRandomAddress(): string {
    return faker.location.streetAddress();
  }
  
  static getRandomPassword(length: number = 10): string {
    return faker.internet.password({ length });
  }

  static getRandomAlphanumeric(length: number = 9): string {
    return faker.string.alphanumeric(length);
  }

  static getRandomNumeric(length: number): string {
    return faker.string.numeric(length);
  }

  static getRandomUUID(): string {
    return faker.string.uuid();
  }

    static getRandomDay(): string {
    return faker.number.int({ min: 1, max: 28 }).toString();
  }

    static getRandomMonth(): string {
    return faker.date.month();
  }

    static getRandomYear(length: number = 4): string {
    return faker.number.int({ min: 1990, max: 2023 }).toString();
  }

    static getCompanyName(): string {
    return faker.company.name();
  }

    static getZipCode(): string {
    return faker.location.zipCode();
  }


      static getRandomQuantity(): string {
    return faker.number.int({ min: 1, max: 50 }).toString();
  }


}