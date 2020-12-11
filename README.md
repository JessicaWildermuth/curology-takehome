# Curology-TakeHome

Magic Potion Single Page 

## Table of Contents
1. [API](#api)

## Usage

## Requirements

# API

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
