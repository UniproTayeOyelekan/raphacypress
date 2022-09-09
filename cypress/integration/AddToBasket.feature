    @nondestructive @add_basket
Feature: Add to basket
    As a Rapha Customer
    I should be able to add products into a basket

    @automation
    Scenario Outline: Add Product to Basket
        Given that I am a Rapha Customer
        When I navigate to <product_page>
        And I select <size> from Size picker
        And I select <colour> from colour picker
        And I click "add to basket" button
        Then I click go to basket button
        Then product with <size> and <colour> displays in basket

        Examples:
            | product_page                                                 | colour      | size |
            | /gb/en/shop/womens-trail-windblock-jersey/product/WTW01XXAMP | Navy/Pink | Large    |
            | /gb/en/shop/womens-trail-windblock-jersey/product/WTW01XXAMP | Navy/Pink | XX-Small    |