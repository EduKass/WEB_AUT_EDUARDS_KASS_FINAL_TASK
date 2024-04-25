import { BasePage } from "../pageObjects/BasePage";
export class AutomationPracticeFormPage extends BasePage {
    static get url() {
      return "/automation-practice-form";
    }
    static get selectFirstName(){
        return cy.get('[placeholder="First Name"]');
    }
    static get selectLastName(){
        return cy.get('[placeholder="Last Name"]');
    }
    static get selectGender(){
        return cy.get('[class="custom-control-label"]');
    }
    static get selectNumber(){
        return cy.get('[placeholder="Mobile Number"]');
    }
    static get selectDatePicker(){
        return cy.get('[class="react-datepicker__input-container"]');
    }
    static get setYear(){
        return cy.get('select').eq(1);
    }
    static get setMonth(){
        return cy.get('select').eq(0);
    }
    static get setDay(){
        return cy.get('[class="react-datepicker__month"]');
    }
    static get setSubject(){
        return cy.get('[id="subjectsContainer"]');
    }
    static get setHobbies(){
        return cy.get('[class="col-md-9 col-sm-12"]');
    }
    static get setCityAndState(){
        return cy.get('[class="col-md-4 col-sm-12"]');
    }
    static get selectUploadFile(){
        return cy.get('[class="form-control-file"]');
    }
    static get selectSubmit(){
        return cy.get('[id="submit"]');
    }

    static get validateOutput(){
        return cy.get('tr');
    }

}