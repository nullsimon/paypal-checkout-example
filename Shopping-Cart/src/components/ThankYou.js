import React, { Component } from 'react';


class ThankYou extends Component{
    
    render() {
        const query = new URLSearchParams(this.props.location.search);

        var transactionID = query.get('transactionID');
        return (
            <div className='thankyou center'>
                <h3 >Thanks for your order, Your transactionID as follows</h3>
                <p className='transactionID'>{transactionID} </p> 
            </div>
        )
    }
}

export default ThankYou;