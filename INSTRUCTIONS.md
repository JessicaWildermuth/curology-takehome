# Magic Potion Launch Site

Curology has just created a new product that will revolutionize the skincare industry and we're ready to unveil it to the world. This product is so different and magical that it requires its very own distinct workflow separate from the other Curology products. You are tasked with developing a checkout page for purchasing this new product.

We understand you have other priorities. You may work at your own tempo to complete this assignment. On average this exercise should take approximately 4-6 hrs to complete. Please inform us should you require more than a week's time to submit or have opted to not complete the assignment. Your feedback is extremely important to us and will help us refine our process.

**Project Submission**
**Good**: Provide a readme file with instructions on how to run your site, and commit it along with your code to this repo.

**Best**: Signup and deploy your site to a platform such as Heroku. Provide a link to your  site and git repo containing a readme that documents tech stack used and instructions on how to run your site.

Part of your evaluation will be based on the clarity and understandability of your documentation.

---

**Toolset**:

Although we have a soft spot for React and Laravel, you may in the language of your choice, create a single page that allows a user to purchase the magic potion.

---

**Product Information**
Name: Magic Potion
Price: 49.99

**Front end specifications**:

1. Capture the following user information in a form:
    - First Name
    - Last Name
    - Email
    - Address (street1*, street2, city*, state*, zip*)
    - Phone Number
    - Payment information
        Normally, we would not be storing payment information and would prefer to integrate a service such as Stripe or Square. For the purpose of this exercise, assume we have a magical merchant system to process our magic potion orders. In the form, provide text fields to capture the following fields:
            -   Credit Card Number
            -   Credit Card Expiration Date
            -   Credit Card CVV
        
    
      ![Privilege Gold Card](docs/privilege-gold-card.png?raw=true "Privilige Gold Card")

    On success:

    - All fields should clear to it's original state

    On failure:

    - Fields should not clear

2. Notification
    
    On success, display notification that the order went through.
        - e.g. "Your order has been placed!"
        
    On failure, display an indicator showing the error message
        - e.g "Credit card cannot be expired"

3. Validation
    You have the option to choose how and where data validation is implemented.

4. Design
    You have free range to be creative in how you implement and design your form.
    - e.g. Name fields may be represented in your UI as 1 or more fields.
    
    - This is an example of a basic form. Feel free to move and organize fields in a way that is more interesting to you. E.g. collapsing and expanding sections, size of fields, color and fonts.

        ![Example Form](docs/form.png?raw=true "Example Magic Potion Form")

**Backend specifications**:

In the language of your choice, create an API that accepts the following endpoints

- POST /api/orders
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
        	"total": "string",
        	"payment": {
        		"creditCardNumber": "string",
        		"creditCardExpiration": "string",
                "cvv": "string",
        	},
        }
        ```

    - returns the following status and unique id

        ```bash
        201 CREATED

        {
        	"id": integer
        }
        ```

You may use any kind of storage to persist the data - SQL, NoSQL, text file or even local memory.

Although a DB is not required, please document and describe the data schema for your site in the readme file. See ReadMe section below for details on what should be included in your readme file.

**ReadMe**:

On top of the description on how to run your site, please provide answers to the following questions in your readme.

- Describe your data schema and how it relates to the purchasing of magic potions.
- Describe how this could scale over time.
- Describe your front end architecture and why you chose to create it as you did. Include details about form validation, error handling etc.

- With more time or in a different environment, what would you do differently?
- What would you do to improve or scale the application?

**BONUS**:

Create unit test(s) for each route

Add custom CSS style to your front end.
