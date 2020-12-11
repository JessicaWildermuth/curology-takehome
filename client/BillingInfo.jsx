import React from 'react';
import PropTypes from 'prop-types';

const BillingInfo = ({
  firstName, lastName, email, street1, street2, city,
  state, zip, ccNum, exp, updateBilling, submitOrder,
  phone,
}) => (
  <div className="componentContainer">
    <h1>Billing | Customer Information</h1>
    <form onSubmit={submitOrder} className="billingInfo">
      <input type="text" value={firstName} name="firstName" onChange={updateBilling} placeholder="First Name" required />
      <input type="text" value={lastName} name="lastName" onChange={updateBilling} placeholder="Last Name" required />
      <input type="text" value={street1} name="street1" onChange={updateBilling} placeholder="Street 1" required />
      <input type="text" value={street2} name="street2" onChange={updateBilling} placeholder="Street 2" />
      <input type="text" value={city} name="city" onChange={updateBilling} placeholder="City" required />
      <select name="state" value={state} onChange={updateBilling} required>
        <option value="">Select State</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
      <input type="text" value={zip} name="zip" onChange={updateBilling} placeholder="Zip Code" required />
      <input type="email" value={email} name="email" onChange={updateBilling} placeholder="Email" required />
      <input type="tel" value={phone} name="phone" onChange={updateBilling} placeholder="Phone Number" required />
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
  phone: PropTypes.string.isRequired,
  ccNum: PropTypes.string.isRequired,
  exp: PropTypes.string.isRequired,
  updateBilling: PropTypes.func.isRequired,
  submitOrder: PropTypes.func.isRequired,
};

export default BillingInfo;
