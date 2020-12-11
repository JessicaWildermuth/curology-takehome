const { Pool } = require('pg');
const config = require('./config.js');

const pool = new Pool(config);

const checkOrders = (referenceNumber, callback) => {
  const query = 'SELECT customer_ref FROM orders WHERE customer_ref = $1';
  pool.query(query, referenceNumber, (error, orders) => {
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
  pool.query(query, customer, (error, customers) => {
    if (error) {
      callback(error);
    } else {
      callback(null, customers.rows);
    }
  });
};

const createCustomerInfo = (customerInformation, callback) => {
  const query = 'INSERT INTO customers (first_name, last_name, email, phone, street1, street2, city, states, zip, ccNum, expiration) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING customer_id';
  pool.query(query, customerInformation, (error, id) => {
    if (error) {
      callback(error);
    } else {
      callback(null, id.rows);
    }
  });
};

const createOrder = (orderInformation, callback) => {
  console.log(orderInformation);
  const query = 'INSERT INTO orders (customer_ref, total, quantity, fulfilled) VALUES ($1, $2, $3, $4) RETURNING id';
  pool.query(query, orderInformation, (error, orderId) => {
    if (error) {
      callback(error);
    } else {
      callback(null, orderId.rows);
    }
  });
};

const deleteOrder = (orderId, callback) => {
  const query = 'DELETE FROM orders WHERE id = $1';
  pool.query(query, orderId, (error, success) => {
    if (error) {
      callback(error);
    } else {
      callback(null, success);
    }
  });
};

const getAllOrders = (callback) => {
  const query = 'SELECT * FROM orders LEFT JOIN customers ON customer_ref = customer_id';
  pool.query(query, (error, orders) => {
    if (error) {
      callback(error);
    } else {
      callback(null, orders.rows);
    }
  });
};

const getOrderById = (id, callback) => {
  const query = 'SELECT * FROM orders WHERE id = $1 LEFT JOIN customers ON customer_ref = customer_id';
  pool.query(query, id, (error, order) => {
    if (error) {
      callback(error);
    } else {
      callback(null, order.rows);
    }
  });
};

const updateOrderFulfillment = (orderUpdate, callback) => {
  const query = 'UPDATE orders SET fulfillment = $2 WHERE id = $1';
  pool.query(query, orderUpdate, (error, success) => {
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
