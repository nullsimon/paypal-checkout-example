import React, { Component } from 'react';


class ThankYou extends Component{
    
    render() {
        const query = new URLSearchParams(this.props.location.search);

        var orderId = query.get('orderId');
        return (
            <div className='thankyou center'>
                <h3 >Thanks for your order</h3>
                <p className='orderid'>{orderId} </p> 
            </div>
        )
    }
}

export default ThankYou;