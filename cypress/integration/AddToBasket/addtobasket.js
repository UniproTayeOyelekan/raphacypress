import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
When(/^I navigate to (.*?)$/, (product_page) => {
    cy.visit(product_page)
    cy.title().should('include', "Rapha");
    cy.wait(10000)
});

When(/^I select (.*?) from Size picker$/, (size) => {
    //cy.
    cy.get('label').find("input[name='"+size+"']").first().parent().click()
});

When(/^I select (.*?) from colour picker$/, (colour) => {
    
    cy.get('label').find("input[name='productVariants']").last().parent().click()
    cy.get('.swatches').should('have.text', 'Colour '+colour)
});
When(/^I click "add to basket" button$/, () => {
    cy.get('.purchase').first().click()
    
});
Then(/^I click go to basket button$/, () => {
    cy.wait(2000)
    cy.get('.basket-submit').first().click()
    
});
Then(/^product with (.*?) and (.*?) displays in basket$/, (size,colour) => {
    let result=false;
    cy.get('.basket-wishlist .list-item.full-width .item-variants').each((v)=>{
        if(v.context.innerText.includes(size) && v.context.innerText.includes(colour)){
            result=true;
        }

    }).then(()=>{
        expect(result).to.be.true
    })

    
});

