const express = require('express')
const router = express.Router();
const {student} = require('./schema');

// Getting Seller Data
router.get('/', (req, res) => {
    student.find({ role: 'student' }, (error, doc) => {
        if(error) {
            console.log(error);
            res.status(500).send({msg: 'Find Error occured in Student Database.'})
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
    student.create({title: data.title, description: data.description, role: 'student'}, (error, doc) => {
        if(error) {
            console.log(error);
            res.status(500).send({msg: 'Create Error occured in Student Database.'})
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
    student.findByIdAndUpdate(req.body.id, req.body.data, (error, doc) => {
        if(error) {
            console.log(error);
            res.status(500).send({msg: 'Create Error occured in Student Database.'})
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
    student.findByIdAndDelete(req.body.id, (error, doc) => {
        if(error) {
            console.log(error);
            res.status(500).send({msg: 'Create Error occured in Student Database.'})
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