const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')

require('dotenv/config');

app.use(cors());
app.options('*', cors());

// middleware for req, res of the backend
app.use(bodyParser.json());
app.use(morgan('tiny'));




// Routers
const categoriesRoutes = require('./routes/categories'); 
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const ordersRoutes = require('./routes/orders');


const api = process.env.API_URL_KEY;


// every server api endpoint must have an API/ and V (version) in the address
app.use(`/${api}/categories`, categoriesRoutes);
app.use(`/${api}/products`, productsRoutes);
app.use(`/${api}/users`, usersRoutes);
app.use(`/${api}/orders`, ordersRoutes);

mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  dbName: 'E-Commerce-Shop'
})
.then(()=>{
  console.log('Database Connection is now ready')
})
.catch((err)=>{
  console.log(err);
})



app.listen(7000, ()=>{
  console.log('server is running on http://localhost:7000');
});