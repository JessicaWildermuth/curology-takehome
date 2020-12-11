import React from 'react';
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
      quantity: '1',
      total: '49.99',
      ccNum: '',
      exp: '',
    };
    this.updateQuantity = this.updateQuantity.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
    this.updateBilling = this.updateBilling.bind(this);
  }

  updateQuantity(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
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
    this.setState({
      [name]: value,
    });
  }

  submitOrder(event) {
    event.preventDefault();
  }

  render() {
    const {
      firstName, lastName, email, street1, street2, city, state, zip, ccNum, exp, total,
    } = this.state;
    return (
      <div>
        <ProductInfo total={total} updateQuantity={this.updateQuantity} />
        <BillingInfo
          firstName={firstName}
          lastName={lastName}
          email={email}
          street1={street1}
          street2={street2}
          city={city}
          state={state}
          zip={zip}
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
