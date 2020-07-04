# A Shopping cart with Paypal Checkout Button integrationb build with React and Nodejs-Express

## FrontEnd based on following project 
* Shopping Cart Copy From  https://github.com/AyaBellazreg/React-Shopping-Cart/tree/master/Shopping-Cart
* React Paypal Button  https://www.npmjs.com/package/react-paypal-button-v2

## BackEnd Server Based on Express

## Demo
[Here](http://demo.alittletrash.com/)

## Feature
### shopping cart
* A shopping page 
* A shopping cart with add and remove items
* Calculate total money with shipping

### Shipping address form with buyer's information
* a shipping address form with buyer's information

### paypal button
* a paypal button integration of paypal checkout

### paypal process
* when button clicked, the  buyer's infomation and shopping cart items  would be send to paypal
* then it communicate with server to complete order, when this process get done, the server send back some confirmtion to client side
* the user get a thank you page 


## Getting Start

### Requirements
* Nodejs
* Npm
* nginx 

### frontend build

1 first you need to replace the clientId with your own, you can get from paypal [paypal sandbox](https://developer.paypal.com/docs/api/overview/)

file: Shopping-Cart/src/components/PaypalCheckout.js

``` js
options={{
    clientId: "Your Own Sandbox ClientId",
    currency: "USD"
}}
```
2 then begin test or build production

``` bash
cd Shopping-Cart
npm install 
```
then you can choose to build production 
``` bash
npm run build
```

or just run in local
``` bash
npm start
```

### run server

1 the server is just a express app, you need to replace the clientId and secret,the same as frontend

file: paypal-checkout-server/paypal.js

``` js
const clientId = "Your Own Sandbox ClientId";
const clientSecret = "Your Own Sandbox Secret";
``` 

2 then build and run
``` bash
cd paypal-checkout-server
npm install
npm start
```

### nginx configuration
1 this project uses a nginx as a front server

2 the nginx configuration example see config/nginx.conf