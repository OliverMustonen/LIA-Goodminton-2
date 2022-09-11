const express = require('express');
const app = express();
const cors = require('cors');
// const auth = require('./authentication/auth');

const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
//const restrictedProducts = require('./controllers/restrictedProducts');

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());



app.use('/api/users', userController);
app.use('/api/products', productController);
// app.use(auth.verifyToken);
// app.use('/api/products', auth.verifyToken, restrictedProducts);

module.exports = app;