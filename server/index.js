const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const port = process.env.PORT || 80

app.use(express.static('public'));

app.use(bodyParser.json());

app.post('/api/magic', (req, res) => {
  const {
    firstName, lastName, email, address, payment, quantity, total, phone,
  } = req.body;

  const {
    street1, street2, city,
    state, zip,
  } = address;

  const { ccNum, exp } = payment;

  const customerData = {
    firstName, lastName, street1, street2, city, state, zip,
  };

  db.checkForExistingCustomer(customerData, (error, customer) => {
    if (!customer.length) {
      const customerInfo = [
        firstName, lastName, email, phone, street1,
        street2, city, state, zip, ccNum, exp,
      ];
      db.createCustomerInfo(customerInfo, (error2, id) => {
        if (error2) {
          res.status(500).send(error2);
        } else {
          console.log(id);
          const customerId = id[0].customer_id;
          db.checkOrders([customerId], (error3, order) => {
            if (error3) {
              res.status(500).send(error3);
            } else if (!order.length) {
              const newOrder = [customerId, total, quantity, false];
              db.createOrder(newOrder, (error4, orderId) => {
                if (error4) {
                  res.status(500).send(error4);
                } else {
                  res.status(201).send(orderId[0]);
                }
              });
            } else {
              res.send('A user with the same name at this address already exists');
            }
          });
        }
      });
    } else {
      res.send('A user with the same name at this address already exists');
    }
  });
});

app.get('/api/magic', (req, res) => {
  if (!res.body) {
    db.getAllOrders((error, orders) => {
      if (error) {
        res.status(404).send(error);
      } else {
        res.status(200).send(orders);
      }
    });
  } else {
    const orderId = [req.body];
    db.getOrderById(orderId, (error, order) => {
      if (error) {
        res.status(404).send(error);
      } else {
        res.status(200).send(order);
      }
    });
  }
});

app.patch('/api/magic', (req, res) => {
  const orderUpdate = [req.body.id, req.body.fulfillment];
  db.updateOrderFulfillment(orderUpdate, (error, success) => {
    if (error) {
      res.status(404).send(error);
    } else {
      res.status(204).send(success);
    }
  });
});

app.delete('/api/magic', (req, res) => {
  const id = [req.body.id];

  db.deleteOrder(id, (error, success) => {
    if (error) {
      res.status(404).send(error);
    } else {
      res.status(204).send(success);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
