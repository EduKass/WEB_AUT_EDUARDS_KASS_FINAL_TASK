import { AutomationPracticeFormPage } from "../pageObjects/AutomationPracticeFormPage";
describe("Demoqa scenarios", () => {
    context("First Scenario", () => {
      beforeEach(() => {
        AutomationPracticeFormPage.visit();
     });
     it.only("Full scenario", () => {
        AutomationPracticeFormPage.selectFirstName.type("Eduards");
        AutomationPracticeFormPage.selectLastName.type("Kass");
        AutomationPracticeFormPage.selectGender.contains("Male").click();
        AutomationPracticeFormPage.selectNumber.type("1020304050");
        AutomationPracticeFormPage.selectDatePicker.click();
        AutomationPracticeFormPage.setYear.select(30);
        AutomationPracticeFormPage.setMonth.select(2);
        AutomationPracticeFormPage.setDay.contains("28").click();
        AutomationPracticeFormPage.setHobbies.contains("Music").click();
        AutomationPracticeFormPage.setSubject.type("Economics");
        AutomationPracticeFormPage.selectUploadFile.click().selectFile('cypress/files/image.jpeg', {
            mimeType: 'image/jpeg'
        });
        AutomationPracticeFormPage.setCityAndState.contains("State").click().type("NCR{enter}");
        AutomationPracticeFormPage.setCityAndState.contains("City").click().type("Delhi{enter}");
        AutomationPracticeFormPage.selectSubmit.click();

        AutomationPracticeFormPage.validateOutput.contains('Male');
        AutomationPracticeFormPage.validateOutput.contains('Eduards Kass');
        AutomationPracticeFormPage.validateOutput.contains('1020304050');
        AutomationPracticeFormPage.validateOutput.contains('28 February,1930');
        AutomationPracticeFormPage.validateOutput.contains('image.jpeg');
        AutomationPracticeFormPage.validateOutput.contains('NCR Delhi');
    });
    
    });
});
