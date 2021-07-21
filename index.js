const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

// route to create profile for admin using POST method (for owner)
app.use('/profile', require('./owner/profile/route'));

// route to add product in product list using POST method (for owner)
app.use('/product', require('./owner/product/route'));

// route to view all orders using GET method (for owner)
app.use('/orders', require('./owner/order/route'));

// route to see all product list using GET method (for customer)
app.use('/getProductList', require('./customer/viewProduct/route'));

// route to add customer profile using POST method (for customer)
app.use('/customerProfile', require('./customer/customerAccount/route'));

// route to login for customer using POST method
app.use('/login', require('./customer/login/route'));

// route to order products for customer using POST method (customerID, productId will be required)
app.use('/orderProduct', require('./customer/orderProduct/route'));

// route to view own orders for customer (customerId will be required)
app.use('/viewOrders', require('./customer/viewOrder/route'));


// connection from mongo cluster
const CONNECTION_URL = 'mongodb+srv://root:admin%40123@cluster0.jk6d1.mongodb.net/infoware?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
