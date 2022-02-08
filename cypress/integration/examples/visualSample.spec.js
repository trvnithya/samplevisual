/// <reference types = 'cypress'/>
describe('First Visual Testing Sample', () => {
    it('Sample Snapshot Test', () => {
        cy.visit('https://www.example.com')
       //cy.viewport('ipad-2')
        //To Compare the screen
        cy.viewport('iphone-6')
        cy.matchImageSnapshot()
    })
})
  
