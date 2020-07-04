const express = require('express')
let handleOrdersGetRequest = require('./paypal')

const app = express()
const port = 8888
app.use(express.json());


app.post('/api/complete_order', handleOrdersGetRequest)

app.listen(port, () => console.log(`paypal checkout app listening at http://localhost:${port}`))