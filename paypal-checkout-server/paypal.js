const paypal = require('@paypal/checkout-server-sdk');

//replace with your own sandbox config
const clientId = "Your Own Sandbox ClientId";
const clientSecret = "Your Own Sandbox Secret";
// This sample uses SandboxEnvironment. In production, use LiveEnvironment
const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);


module.exports = async function (req, res) {

    console.log("this is orderId: ", req.body.orderID);
  
    let request = new paypal.orders.OrdersGetRequest(req.body.orderID);

    try {
        response = await client.execute(request);
        console.log(JSON.stringify(response.result, null, 2));
        //do something with the order etc, check & run you owner business, then send a confirmation to user
        // this is a example, just send back the orderId get from paypal transaction
        res.send({'orderID': req.body.orderID})
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}
