
// Upload Assignment: E-Commerce Bit
 
// Previous item Page 11 of 11
//    INSTRUCTIONS
// You are to complete the following functionalities on your backend node server:

// Signup

// Login

// Verify token middleware

// Change password

// Create product

// Get products

// Get single products

// Update product

// Delete product



// Submission:

// You will submit this task by 12 noon on Monday the 3rd of July, 2023.

// You are to submit the link to your repository



const express = require('express'); 
const PORT = 3500


const app = express(); 

function logger(req, res, next) {
    console.log(`[${Date.now()}] ${req.method} ${res.method}`);
    next();
}

app.use(logger);

app.get('/test', (req, res) => {
  res.json({ok: true});
  req.json("this is my PORT HOST")
});

app.listen(PORT, () => console.log(`server is running, listen on port ${PORT}`));













// const path = require('path'); 
// const router = express.Router(); 
// // Setup essential routes 
// router.get('/', function(req, res) { 
//  res.sendFile(path.join(__dirname + '/index.html')); 
//  //__dirname : It will resolve to your project folder. 
// }); 
// router.get('/about', function(req, res) { 
//  res.sendFile(path.join(__dirname + '/about.html')); 
// }); 
// router.get('/sitemap', function(req, res) { 
//  res.sendFile(path.join(__dirname + '/sitemap.html')); 
// }); 
// //add the router 
// app.use('/', router); 
// app.listen(process.env.port || 3000); 
// console.log('Running at Port 3000'); 

//class work today SUNDAY 2ND JULY 2023

// CREATE NEW END POINTS TO UPDATE USER INFORMATION (PASSWORD, initial password, new-password, confirm new-password)

// 3) . UPDATE A PRODUCT and DELETE A PRODUCT