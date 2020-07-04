import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'
import PaypalCheckout from './PaypalCheckout'
import BuyerInfo from './Buyer'


function toPaypalItems(items) {

    var paypalItems = [];

    for (var i in items) {
        var item = items[i];
        var paypalItem = {};
        paypalItem.name = item.title;
        paypalItem.quantity = item.quantity;
        var unit_amount = {};
        unit_amount.currency_code = "USD";
        unit_amount.value = item.price;
        paypalItem.unit_amount = unit_amount;

        paypalItems.push(paypalItem);
    }
    return paypalItems;
}

function getItemsTotal(items) {
    var itemsTotal = 0;
    for (var i in items) {
        itemsTotal += items[i].price * items[i].quantity;
    }
    return itemsTotal;
}

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {

            firstName: 'Hello',
            lastName: 'PayPal',
            email: 'sb-xz8sf2449439@personal.example.com',
            phone: '8882211161',
            address: '',
            street: '2211 North First Street',
            city: 'San Jose',
            country: 'US',
            state: 'CA',
            zip: '95131',

        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillUnmount() {
        if (this.refs.shipping.checked)
            this.props.substractShipping()
    }

    handleChecked = (e) => {
        if (e.target.checked) {
            this.props.addShipping();
        }
        else {
            this.props.substractShipping();
        }
    }

    handleChange = (name, value) => {
        console.log(name, value);
        this.setState({
            [name]: value
        });
    }

    render() {

        return (
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                        <label>
                            <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                            <span>Shipping(+6$)</span>
                        </label>
                    </li>
                    <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                </div>
                <BuyerInfo
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    phone={this.state.phone}
                    address={this.state.address}
                    street={this.state.street}
                    city={this.state.city}
                    country={this.state.country}
                    state={this.state.state}
                    zip={this.state.zip}
                    onBuyerInfoChange={this.handleChange}
                />
                <PaypalCheckout
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    phone={this.state.phone}
                    address={this.state.address}
                    street={this.state.street}
                    city={this.state.city}
                    country={this.state.country}
                    state={this.state.state}
                    zip={this.state.zip}
                    total={this.props.total}
                    addedItems={toPaypalItems(this.props.addedItems)}
                    item_total={getItemsTotal(this.props.addedItems)}
                    shipping_fee={this.props.total - getItemsTotal(this.props.addedItems)}
                    onBuyerInfoChange={this.handleChange}
                />
                {/* <div className="checkout">
                        <button className="waves-effect waves-light btn">Checkout</button>
                    </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }) },
        substractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
