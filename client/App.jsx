import React from 'react';
import ProductInfo from './ProductInfo';

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

    const total = basePrice * quantity;

    this.setState({
      total,
    });
  }

  render() {
    const { total } = this.state;
    return (
      <div>
        <ProductInfo total={total} updateQuantity={this.updateQuantity} />
      </div>
    );
  }
}

export default App;
