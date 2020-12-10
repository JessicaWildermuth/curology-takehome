# Notes
- Reduce candidate time or engineer review time
    - Added boilerplate options
    - Provide a Heroku script they can use to deploy the app with
    - Provide unit test bolierplate
    - Remove number form fields to implement, if someone can do email validation, I expect they can do address validation
    - Remove number of routes to implement, if someone can POST/DELETE, I expect they can do the other verbs.

- Ask for an explicit signal on:
    - Frontend & Backend validation
    - Usability
    - Ability to code to design assets (Figma)
    - Relational databases - by marking SQL as preferred
    - Testing
- Bonus / Creativity
    - CSS transitions

# Magic Potion Launch Site

Curology has just created a new product that will revolutionize the skincare industry and we're ready to unveil it to the world. This product is so different and magical that it requires its very own distinct workflow separate from the other Curology products. You are tasked with developing this new site.

We understand you have other priorities. You may work at your own tempo to complete this assignment. On average this exercise should take approximately 4-6 hrs to complete. Please inform us should you require more than a week's time to submit or have opted to not complete the assignment. Your feedback is extremely important to us and will help us refine our process.

**Project Submission**
**Good**: Provide a readme file with instructions on how to run your site, and commit it along with your code to this repo.

**Best**: Signup and deploy your site to a platform such as Heroku. Provide a link to your  site and git repo containing a readme that documents tech stack used and instructions on how to run your site.

Part of your evaluation will be based on the clarity and understandability of your documentation.

---

**High Level Requirements**:

Please use one of the following boilerplates for your assessment:
- React & Laravel
- React & Node
- etc
Please create a Heroku account and deploy via this script in the boilerplate.
- blah, i hope this is possible
---

**Front end specifications**:

1. Capture the following user information in a form:
    - Email
    - Payment information: Normally, we would not be storing payment information and would prefer to integrate a service such as Stripe or Square. For the purpose of this exercise, assume we have a magical merchant system to process our magic potion orders. In the form, provide text fields to capture the user's credit card number and expiration date.
    
      ![Privilege Gold Card](docs/privilege-gold-card.png?raw=true "Privilige Gold Card")

    - The 3 potions can be ordered across multiple orders, if the email associated with the order has already reached 3 orders please show an error message to the user
    - Calculated field that displays the product of the quantity multiplied by the base unit price of 49.99 per potion.

2. A button that submits the form and validates all fields are completed properly and that none are empty.

    On success:

    - All fields should clear to it's original state
    - Show a successful order message

    On failure:

    - Fields should not clear
    - Display an indicator showing which field caused the failure

    We will also be verifying that we cannot do such things as:

    - order more than 3 potions
    - enter a non-numeric value in the quantity field
    - submit multiple orders under the same name etc.
3. A notification to the user after the form was submitted to the API
    - Perform both frontend and backend validation. Specifically:
        - blah
        - blah
        - and blah
4. Included in the submission is a Figma file please implement the form to this design.
    - e.g. Name fields may be represented in your UI as 1 or more fields. (We may find it strange if you have more than 3)
    - e.g. For quantity, you may decide to use a drop down list containing values 1-3 or a free text field and validate the input on change, on keyup, on keydown or on blur etc...
    - Points will be given for Usability, specifically:
        - blah
        - blah 
        - and blah

**Backend specifications**:

In the language of your choice, create an API that accepts the following endpoints

- POST /api/magic
    - Receives the following request

        ```bash
        {
        	"firstName": "string",
        	"lastName": "string",
        	"email": "string",
        	"address": {
        		"street1": "string",
        		"street2": "string",
        		"city": "string",
        		"state": "string",
        		"zip": "string"
        	},
        	"phone": "string",
        	"quantity": number,
        	"total": "string",
        	"payment": {
        		"ccNum": "string",
        		"exp": "string",
        	},
        }
        ```

    - before adding a new order to the DB, verify that the client is not submitting an order that will exceed the maximum of 3 magic potions per customer for a given month.
    - returns the following status and unique id

        ```bash
        201 CREATED

        {
        	"id": uid
        }
        ```

Although the client facing UI at this time does not require the ability to retrieve, update or delete order info, these endpoints should exist for a future system such as an admin UI to consume. These endpoints will be tested to be functional

- DELETE /api/magic/<uid>

    success response

    ```bash
    200 || 204 "resource deleted successfully"
    ```

    failure response

    ```bash
    404 "resource not found"
    ```

You should use one of the following databases to persist the data:
- MySQL (preferred)
- Postgres (preferred)
- Mongo

A basic test skeleton is included for both routes, please add test code to cover the basic functionality of the routes. Add tests for any other edge cases you can think of. 

**ReadMe**:

On top of the description on how to run your site, please provide answers to the following questions in your readme.

- Describe your data schema and how it relates to the purchasing of magic potions.
- Describe how this could scale over time.
- Describe your front end architecture and why you chose to create it as you did. Include details about form validation, error handling etc.
- Describe the API architecture
- With more time or in a different environment, what would you do differently?
- What would you do to improve or scale the application?

**BONUS**:

Add any CSS transition effects you'd like to the front end, but don't over do it! The UI should be "on brand" and professional.
