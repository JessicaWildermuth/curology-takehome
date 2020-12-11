const { Pool } = require('pg');
const config = require('./config.js');

const pool = new Pool(config);

const checkForExistingCustomer = (customerInfo, callback) => {
  const { firstName, lastName } = customerInfo;
  const names = [firstName, lastName];
  const query = 'SELECT * FROM customers WHERE first_name = $1 AND last_name = $2';
  pool.query(query, names, (error, customer) => {
    if (error) {
      console.log(error, 'existingCustomer')
      callback(error);
    } else {
      callback(null, customer.rows);
    }
  });
};

const createCustomerInfo = (customerInformation, callback) => {
  const query = 'INSERT INTO customers (first_name, last_name, email, phone, street1, street2, city, states, zip, ccNum, expiration) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING ID';
  pool.query(query, customerInformation, (error, id) => {
    if (error) {
      console.log(error, 'createCustomer');
      callback(error);
    } else {
      callback(null, id.rows);
    }
  });
};

const createOrder = (orderInformation, callback) => {
  const query = 'INSERT INTO orders (customerID, total, quantity, fulfilled) VALUES ($1, $2, $3, $4)';
  pool.query(query, orderInformation, (error, orderId) => {
    if (error) {
      callback(error);
    } else {
      callback(null, orderId.rows.id);
    }
  });
};

module.exports = {
  checkForExistingCustomer,
  createOrder,
  createCustomerInfo,
};
