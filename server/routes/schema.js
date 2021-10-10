require('dotenv').config();
const uri = process.env.DB_URL;
const mongoose = require('mongoose');

mongoose.connect(uri, {useNewURLParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Successfully Connected ...')
})
.catch(error => console.log('Connection Error', error))


// Schema Declaration
const schema = new mongoose.Schema({
    title: String,
    description: String,
    role: String
});

// Models
const Customer = mongoose.model('Customer', schema);
const Student = mongoose.model('Student', schema);
const Seller = mongoose.model('Seller', schema);

module.exports = {
    customer: Customer,
    student: Student,
    seller: Seller
}