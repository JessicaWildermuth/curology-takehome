import React from 'react';
import PropTypes from 'prop-types';

const BillingInfo = ({
  firstName, lastName, email, street1, street2, city,
  state, zip, ccNum, exp, updateBilling, submitOrder,
}) => (
  <div>
    <h1>Billing | Customer Information</h1>
    <form onSubmit={submitOrder}>
      <input type="text" value={firstName} name="firstName" onChange={updateBilling} placeholder="First Name" required />
      <input type="text" value={lastName} name="lastName" onChange={updateBilling} placeholder="Last Name" required />
      <input type="email" value={email} name="email" onChange={updateBilling} placeholder="Email" required />
      <input type="text" value={street1} name="street1" onChange={updateBilling} placeholder="Street 1" required />
      <input type="text" value={street2} name="street2" onChange={updateBilling} placeholder="Street 2" />
      <input type="text" value={city} name="city" onChange={updateBilling} placeholder="City" required />
      <input type="text" value={state} name="state" onChange={updateBilling} placeholder="State" required />
      <input type="text" value={zip} name="zip" onChange={updateBilling} placeholder="zip" required />
      <input type="text" minLength="15" value={ccNum} name="ccNum" onChange={updateBilling} placeholder="Credit Card Number" required />
      <input type="month" value={exp} name="exp" onChange={updateBilling} placeholder="Expiration Date" required />
      <input type="submit" value="Complete Order" />
    </form>
  </div>
);

BillingInfo.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  street1: PropTypes.string.isRequired,
  street2: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  ccNum: PropTypes.string.isRequired,
  exp: PropTypes.string.isRequired,
  updateBilling: PropTypes.func.isRequired,
  submitOrder: PropTypes.func.isRequired,
};

export default BillingInfo;
