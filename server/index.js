const express = require('express');

const app = express();
const customer = require('./routes/customer');
const student = require('./routes/student');
const seller = require('./routes/seller');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Get the Main Page
app.use('/customer', customer);
app.use('/student', student);
app.use('/seller', seller);

const PORT = process.env.PORT || 5000;

// Listen for the port
app.listen(PORT, (error) => {
    if(error) console.log(error);
    console.log(`Server is listening on Port:${PORT}`)
});