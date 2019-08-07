** TODO 
- sanity test for demo user
- tests for mobile pages 
- extract users.json
- datafile.json
- look_like matchers


~~~sh
```
# Run Tests in cypress open mode
npm run test

# Prettier
npm run prettier:write
npm run prettier
```
~~~
 
**Selectors**

|                             | API                            | Example                                                      |
| --------------------------- | ------------------------------ | ------------------------------------------------------------ |
| select by text              | .contains(text)                |                                                              |
| get url                     | cy.url()                       | ```cy.url().should( 'include', 'vacation.html')```           |
| get attribute value         | .invoke('attrs', '<atr-name>') | ```cy.get('.img-rounded').invoke('attr', 'src').should('include', 'assets/vacation.jpg')``` |
| get first element for query | .first()                       | `cy.get('.brand').first().click()`                           |
| select by name              | cy.get('[name="<value>"]')     | `cy.get('[name="toPort"]')`                                  |
|                             |                                |                                                              |
|                             |                                |                                                              |



**Assertions**

|                | API                        | Example                                                      |
| -------------- | -------------------------- | ------------------------------------------------------------ |
| contains text  | .should('include', 'text') | ```cy.url().should( 'include', 'vacation.html')```           |
| element exists | should('exist')            | ```cy.contains('Destination of the week: Hawaii !').should('exist')``` |
| element contains text |  `invoke('text').should('include', 'Travel')`                     |`cy.get('.brand').first().invoke('text').should('include', 'Travel'); `|

**Recipe**

- **Find children of parent of an element**

  ```js
  cy.get('td').contains('Lufthansa').parent().find('input[type="submit"]').as("bookThisFligh")
  ```

- **Get alement, make assertions and perform actions**

  ```js
  cy.get('td').contains('Lufthansa').parent().find('input[type="submit"]').as("bookThisFlight")
  cy.get("@bookThisFlight").invoke('attr', 'value').should('include', 'Choose This Flight')   cy.get("@bookThisFlight").click()
  ```


