# A Shopping cart with Paypal Checkout Button integration build with React and Nodejs-Express


## based on following project 
* Shopping-Cart  https://github.com/AyaBellazreg/React-Shopping-Cart/tree/master/Shopping-Cart
* React-Paypal-Button  https://www.npmjs.com/package/react-paypal-button-v2


## Demo
[Here](http://demo.alittletrash.com/)

## Feature
**shopping cart**
* A shopping list page with items 
* A shopping cart with add and remove items
* Calculate total money with shipping

**buyer's information form**
*  buyer's information with shipping address

**paypal button**
* a paypal button integration of paypal checkout

**checkout process**
* when button clicked, the  buyer's infomation and shopping items list would be send to paypal
* when customer approved, it communicate with server to complete order
* finally, the user get a thank you page 


## Getting Start

### Requirements
* Nodejs
* Npm
* nginx 

### frontend build

1 configuration: replace the clientId with your own, you can get it from paypal [paypal sandbox](https://developer.paypal.com/docs/api/overview/)

``` bash
vim Shopping-Cart/src/components/PaypalCheckout.js
```

``` js
options={{
    clientId: "Your Own Sandbox ClientId",
    currency: "USD"
}}
```

2 install dependency and run the client

``` bash
cd Shopping-Cart
npm install 
```
run in local
``` bash
npm start
```

or build production 
``` bash
npm run build
```

### Run server

1 configuration: fill your own config

``` bash
vim paypal-checkout-server/paypal.js
```

``` js
const clientId = "Your Own Sandbox ClientId";
const clientSecret = "Your Own Sandbox Secret";
``` 

2 install dependency and run the server

``` bash
cd paypal-checkout-server
npm install
npm start
```

### nginx configuration
1 this project uses a nginx as a front server

2 example file:  config/nginx.conf