# Curology-TakeHome

Magic Potion Single Page 

## Table of Contents
1. [API](#api)
2. [Database Schema](#database-schema)
3. [Front End Architecture](#front-end-architecture)
4. [Different Approaches To Consider](#different-approaches-to-consider)
5. [Areas For Improvement And Scaling](#areas-for-improvement-and-scaling)

## API

### Create new order for magic potion #1
  * POST '/api/magic'

**Success Status Code:** '201'

**Request Body**: Expects JSON with the following keys:

```json
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
    },
```
**Returns:** 
``` 
  {
	"id": uid
},
```

### Get magic potion orders

  * Get '/api/magic'
  
**Success Status Code:** '200'
**Failure Status Code:** '404'

**Returns:**

```
{
	"firstName": "string",
	"lastName": "string",
	"email": "string",
	"address": {
		"street1": "string",
		"street2": "string",
		"city": "string",
		"state": "string",
		"zip": "string",
	},
	"phone": "string",
	"payment": {
		"ccNum": "string",
		"exp": "string",
	},
	"quantity": number,
	"total": "string",
	"orderDate": date,
	"fulfilled": bool,
},
```

### Update magic potion order

   * PATCH '/api/magic'
 
**Success Status Code:** '204'
**Failure Status Code:** '404'

**Request Body:** 

```
{
	"id": uid,
	"fulfilled": bool
}
```

### Delete order
   * DELETE '/api/magic'
   
**Success Status Code:** '204'
**Failure Status Code:** '404'

## Database Schema

**PostgreSQL Database Tables:** 

  **customers** (
  customer_id    serial PRIMARY KEY,
  first_name     varchar NOT NULL,
  last_name      varchar NOT NULL,
  email          varchar NOT NULL,
  phone         varchar NOT NULL,
  street1       varchar NOT NULL,
  street2       varchar,
  city          varchar NOT NULL,
  states        varchar NOT NULL,
  zip           varchar NOT NULL,
  ccNum         varchar NOT NULL,
  expiration    varchar NOT NULL
);
 
 **orders** (
  id            serial PRIMARY KEY,
  customer_ref  int REFERENCES customers(customer_id),
  total         varchar(10) NOT NULL,
  quantity      int NOT NULL,
  orderDate     TIMESTAMP default now(),
  fulfilled      boolean
);

I created two tables, one for the customers billing information and another for the specific order information. I chose to separate them so that if more magic potions or similiar products became available, the customer's billing information would already be stored to expediate the shopping process withouth keeping old order records that would take up unncessary space over time. 

Ideally, I would also add a login for users so they knew that their information was stored and did not have to re-enter their billing information for each subsequent purchase. 


## Front End Architecture

I created a main class App component that housed all state. I also had a functional product information component and a functional billing information component. 

I had considered making the form a stateful component, which I feel would have made it more versatilve and reusable, however, I know it is best practice to lift state up to the highest order component that needs the data. As my main class App was making the API requests, I ultimtately decided to house all state there.

I used the built-in HTML form validation for most of the required fields. I did implement some basic credit card validation using helper functions and 'setCustomValidity' to keep the overall look and feel of the validation messages cohesive.

## Different Approaches To Consider

With more time, I would have researched React hooks and determined if they were appropriate for this application. I also would have used styled-components rather than basic css in order to make each component more reusable and isolated. 

There were some areas where I was not exactly certain what parameters were being tested. If I had had more time this week, I would have reached out for clarification, specifically in regards to the amount of magic potions allowed per person. In one area, it seemed to imply that simply having a user with the same name and billing address was cause for an error message for the user. In a later area, it appeared to state that a user could purchase 3 potions per month. 

Also, I would have spent more time on CSS, which is something I really enjoy. However, I did not allow myself to work to much on the CSS before the main logic of the application was completed. 

## Areas For Improvement And Scaling

In regards to my own work, I feel that I could have made my components more reusable. I also have some read heavy code that I would like to have cleaned up and made more easily understood without actually reading through the code. 

In terms of overal scaling, I think having a login feature for users so that they already have the billing information stored and compiled for any subsequent order would be beneficially. Similairly with saving payment methods. 

If more products were to be sold through this application, I would probably rethink parts of the database schema. For instance, having a table with for product information with id codes and creating another field in the order table for the product code of the order as a foreign key.
