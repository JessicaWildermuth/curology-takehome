process.env.DATABASE_URL = 'postgres://wpjdqcjnxzbzrs:679ffcc050720329be8af57b59b73191ca12a89dec90db0830fdfe18850769de@ec2-54-205-26-79.compute-1.amazonaws.com:5432/d8d6d7lin0msib';

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
});

const checkOrders = (referenceNumber, callback) => {
  const query = 'SELECT customer_ref FROM orders WHERE customer_ref = $1';
  client.query(query, referenceNumber, (error, orders) => {
    if (error) {
      callback(error);
    } else {
      callback(null, orders.rows);
    }
  });
};

const checkForExistingCustomer = (customerInfo, callback) => {
  const {
    firstName, lastName, street1, street2, city, state, zip,
  } = customerInfo;
  const customer = [firstName, lastName, street1, street2, city, state, zip];
  const query = 'SELECT customer_id FROM customers WHERE first_name = $1 AND last_name = $2 AND street1 = $3 AND street2 = $4 AND city = $5 AND states = $6 AND zip = $7';
  client.query(query, customer, (error, customers) => {
    if (error) {
      callback(error);
    } else {
      callback(null, customers.rows);
    }
  });
};

const createCustomerInfo = (customerInformation, callback) => {
  const query = 'INSERT INTO customers (first_name, last_name, email, phone, street1, street2, city, states, zip, ccNum, expiration) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING customer_id';
  client.query(query, customerInformation, (error, id) => {
    if (error) {
      callback(error);
    } else {
      callback(null, id.rows);
    }
  });
};

const createOrder = (orderInformation, callback) => {
  const query = 'INSERT INTO orders (customer_ref, total, quantity, fulfilled) VALUES ($1, $2, $3, $4) RETURNING id';
  client.query(query, orderInformation, (error, orderId) => {
    if (error) {
      callback(error);
    } else {
      callback(null, orderId.rows);
    }
  });
};

const deleteOrder = (orderId, callback) => {
  const query = 'DELETE FROM orders WHERE id = $1';
  client.query(query, orderId, (error, success) => {
    if (error) {
      callback(error);
    } else {
      callback(null, success);
    }
  });
};

const getAllOrders = (callback) => {
  const query = 'SELECT * FROM orders LEFT JOIN customers ON customer_ref = customer_id';
  client.query(query, (error, orders) => {
    if (error) {
      callback(error);
    } else {
      callback(null, orders.rows);
    }
  });
};

const getOrderById = (id, callback) => {
  const query = 'SELECT * FROM orders WHERE id = $1 LEFT JOIN customers ON customer_ref = customer_id';
  client.query(query, id, (error, order) => {
    if (error) {
      callback(error);
    } else {
      callback(null, order.rows);
    }
  });
};

const updateOrderFulfillment = (orderUpdate, callback) => {
  const query = 'UPDATE orders SET fulfillment = $2 WHERE id = $1';
  client.query(query, orderUpdate, (error, success) => {
    if (error) {
      callback(error);
    } else {
      callback(null, success);
    }
  });
};

module.exports = {
  checkForExistingCustomer,
  createOrder,
  createCustomerInfo,
  deleteOrder,
  checkOrders,
  getAllOrders,
  getOrderById,
  updateOrderFulfillment,
};
