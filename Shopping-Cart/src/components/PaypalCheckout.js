import { PayPalButton } from "react-paypal-button-v2";
import React, { Component } from 'react'

export default class PaypalCheckout extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onBuyerInfoChange(event.target.value);

  }


  render() {
    return (
      <PayPalButton
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                currency_code: "USD",
                breakdown: {
                  item_total: {
                    currency_code: "USD",
                    value: this.props.item_total
                  },
                  shipping: {
                    currency_code: "USD",
                    value: this.props.shipping_fee
                  }
                },
                value: this.props.total,
              },
              items: this.props.addedItems,
              shipping: {
                name: {
                  full_name: this.props.firstName + ' ' + this.props.lastName,
                },
                address: {
                  address_line_1: this.props.street,
                  address_line_2: this.props.address,
                  admin_area_1: this.props.state,
                  admin_area_2: this.props.city,
                  postal_code: this.props.zip,
                  country_code: this.props.country,
                }
              },
            },],


            payer: {
              name: {
                given_name: this.props.lastName,
                surname: this.props.firstName
              },
              email_address: this.props.email,
              phone: {
                phone_number: {
                  national_number: this.props.phone,
                }
              }
            },

            // application_context: {
            //   shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
            // }
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(function (details) {
            fetch("/api/complete_order", {
              method: "post",
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify({
                orderID: data.orderID
              })
            }).then(response => response.json())
              .then(data => {
                console.log(data);
                window.location.href = '/thankyou?orderId=' + data.orderID;
              })
              .catch(err => {
                console.log(err)
              });
          });
        }}
        options={{
          ////replace with your own sandbox clientId
          clientId: "Your Own Sandbox ClientId",
          currency: "USD"
        }}
      />
    );
  }
}