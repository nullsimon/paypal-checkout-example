import React, { Component } from 'react'

export default class BuyerInfo extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onBuyerInfoChange(event.target.name, event.target.value);

    }

    render() {
        const firstName = this.props.firstName;
        const lastName = this.props.lastName;

        return (
            <div>
                <div className='shipping-title'>
                   <h3> Shipping address</h3>
            </div>
                <form>
                    <label>
                        FirstName:
          <input
                            name="firstName"
                            type="text"
                            value={firstName}
                            onChange={this.handleChange} />
                    </label>
        
                    <label>
                        lastName:
          <input
                            name="lastName"
                            type="text"
                            value={lastName}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        email:
          <input
                            name="email"
                            type="text"
                            value={this.props.email}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        phone:
          <input
                            name="phone"
                            type="text"
                            value={this.props.phone}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        street:
          <input
                            name="street"
                            type="text"
                            value={this.props.street}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                    address:
          <input
                            name="address"
                            type="text"
                            value={this.props.address}
                            onChange={this.handleChange} />
                    </label>
                   
                    <label>
                    city:
          <input
                            name="city"
                            type="text"
                            value={this.props.city}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                    country:
          <input
                            name="country"
                            type="text"
                            value={this.props.country}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                    state:
          <input
                            name="state"
                            type="text"
                            value={this.props.state}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                    zip:
          <input
                            name="zip"
                            type="text"
                            value={this.props.zip}
                            onChange={this.handleChange} />
                    </label>
                </form>
            </div>
        );
    }
}