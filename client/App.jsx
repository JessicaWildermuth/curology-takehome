import React from 'react';
import axios from 'axios';

import ProductInfo from './ProductInfo';
import BillingInfo from './BillingInfo';
import helpers from './helperFunctions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      quantity: 1,
      total: '49.99',
      ccNum: '',
      exp: '',
    };
    this.updateQuantity = this.updateQuantity.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
    this.updateBilling = this.updateBilling.bind(this);
    this.reset = this.reset.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
    this.compileOrderInformation = this.compileOrderInformation.bind(this);
  }

  updateQuantity(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: Number(value),
    }, this.updateTotal);
  }

  updateTotal() {
    const { quantity } = this.state;
    const basePrice = 49.99;

    const total = (basePrice * quantity).toString();

    this.setState({
      total,
    });
  }

  updateBilling(event) {
    const { name } = event.target;
    let { value } = event.target;

    if (name === 'ccNum') {
      value = helpers.formatCreditCard(value);
    }

    if (name === 'exp') {
      if (!helpers.validateExpiration(value)) {
        event.target.setCustomValidity('You have entered an expired credit card');
      } else {
        event.target.setCustomValidity('');
      }
    }

    this.setState({
      [name]: value,
    });
  }

  submitOrder(event) {
    event.preventDefault();

    const order = this.compileOrderInformation();

    axios({
      method: 'post',
      url: '/api/magic',
      data: order,
    })
      .then((response) => {
        console.log(response.data);
        if (typeof response.data === 'string') {
          alert(response.data);
        } else {
          alert('Order Placed!');
          this.reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  compileOrderInformation() {
    const {
      firstName, lastName, email, street1, street2, city,
      state, zip, ccNum, exp, quantity, total, phone,
    } = this.state;

    const payment = {
      ccNum,
      exp,
    };

    const address = {
      street1,
      street2,
      city,
      state,
      zip,
    };

    const orderInformation = {
      firstName,
      lastName,
      email,
      address,
      phone,
      quantity,
      total,
      payment,
    };

    return orderInformation;
  }

  reset() {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      quantity: 1,
      total: '49.99',
      ccNum: '',
      exp: '',
    });
  }

  render() {
    const {
      firstName, lastName, email, street1, street2, city,
      state, zip, ccNum, exp, total, phone, quantity,
    } = this.state;
    return (
      <div>
        <ProductInfo total={total} updateQuantity={this.updateQuantity} quantity={quantity} />
        <BillingInfo
          firstName={firstName}
          lastName={lastName}
          email={email}
          street1={street1}
          street2={street2}
          city={city}
          state={state}
          zip={zip}
          phone={phone}
          ccNum={ccNum}
          exp={exp}
          updateBilling={this.updateBilling}
          submitOrder={this.submitOrder}
        />
      </div>
    );
  }
}

export default App;
