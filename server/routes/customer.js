const express = require('express')
const router = express.Router();
const {customer} = require('./schema');

// Getting Customer Data
router.get('/', (req, res) => {
    customer.find({ role: 'customer' }, (error, doc) => {
        if(error) {
            console.log(error);
            res.status(500).send({msg: 'Find Error occured in Customer Database.'})
        } else {
            console.log('Find Successful');
            res.status(200).send(doc.map(element => {
                return {
                    id: element._id,
                    title: element.title,
                    description: element.description
                }
            }))
        }
    })
});

// Post Customer Data
router.post('/', (req, res) => {
    const data = req.body;
    console.log(data)
    customer.create({title: data.title, description: data.description, role: 'customer'}, (error, doc) => {
        if(error) {
            console.log(error);
            res.status(500).send({msg: 'Create Error occured in Customer Database.'})
        } else {
            console.log('Create Successful');
            console.log(doc);
            res.status(200).send({
                id: doc._id,
                title: doc.title,
                description: doc.description
            })
        }
    })
})


// Put Customer Data 
router.put('/', (req, res) => {
    customer.findByIdAndUpdate(req.body.id, req.body.data, (error, doc) => {
        if(error) {
            console.log(error);
            res.status(500).send({msg: 'Create Error occured in Customer Database.'})
        } else {
            console.log('Update Successful');
            console.log(doc);
            res.status(200).send({
                id: doc._id,
                title: doc.title,
                description: doc.description
            })
        }
    })
})

// Delete Customer Data
router.delete('/', (req, res) => {
    console.log(req.body);
    customer.findByIdAndDelete(req.body.id, (error, doc) => {
        if(error) {
            console.log(error);
            res.status(500).send({msg: 'Create Error occured in Customer Database.'})
        } else {
            console.log('Delete Successful');
            console.log(doc);
            res.status(200).send({
                id: doc._id,
                title: doc.title,
                description: doc.description
            })
        }
    })
})

module.exports = router;