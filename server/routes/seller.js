const express = require('express')
const router = express.Router();
const {seller} = require('./schema');

// Getting Seller Data
router.get('/', (req, res) => {
    seller.find({ role: 'seller' }, (error, doc) => {
        if(error) {
            console.log(error);
            res.status(500).send({msg: 'Find Error occured in Seller Database.'})
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

// Post Seller Data
router.post('/', (req, res) => {
    const data = req.body;
    seller.create({title: data.title, description: data.description, role: 'seller'}, (error, doc) => {
        if(error) {
            console.log(error);
            res.status(500).send({msg: 'Create Error occured in Seller Database.'})
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

// Put Seller Data 
router.put('/', (req, res) => {
    seller.findByIdAndUpdate(req.body.id, req.body.data, (error, doc) => {
        if(error) {
            console.log(error);
            res.status(500).send({msg: 'Create Error occured in Seller Database.'})
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

// Delete Seller Data
router.delete('/', (req, res) => {
    seller.findByIdAndDelete(req.body.id, (error, doc) => {
        if(error) {
            console.log(error);
            res.status(500).send({msg: 'Create Error occured Seller in Database.'})
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