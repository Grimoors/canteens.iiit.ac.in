// routes/api/items.js

const express = require('express');
// const req = require('express/lib/request');
const router = express.Router();

// Import Item model
const Item = require('../../models/Item');

// @route GET api/items/test
// @description tests items route
// @access Public
router.get('/test', (req, res) => res.send('items route testing!'));

// @route GET api/items
// @description Get all items
// @access Public
router.get('/',(req,res) => {
    Item.find()
        .sort({date: 1})
        .then(items => res.json(items))
        .catch (err=> res.status(404).json({noitemsfound:"No Items Found"}));
});

// @route GET api/items/:id
// @description Get an Item by its Specific ID
// @access Public
router.get('/:id',(req,res) => {
    Item.findById(req.params.id)
        // .then(item => res.json(item))
        // .catch (err=> res.status(404).json({noitemsfound:"No Items Found"}));
        .then( item => {    
            res.status(200).json(   {
                success: true,
                msg: 'Found successfully',
                searchID: req.params.id,
                itemBody : item,
            } );
            console.log("Item with ID : ");
            console.log(req.params.id);
            console.log( "Found successfully, with body");
            console.log(item);
        } )
        .catch( err => {
            res.status(404).json(   {
                success: false,
                msg: 'Search Failed',
                updateID: req.params.id,
            })
            console.log("Item with ID : ");
            console.log(req.params.id);
            console.log( "Was not Found");
            // console.log(req.body);
        } );
});


// @route POST api/items
// @description Create a post for an Item.
// @access Public //Should be Private
router.post('/',(req,res) => {
    const newItem = new Item({
        name: req.body.name,
    });

    newItem.save().then( item => res.json(item));
});

// @route PUT api/items/:id
// @description Update the key value pairs of an item by its ID
// @access Public //Should be Private
router.put('/:id',(req,res) => {
    Item.findByIdAndUpdate(req.params.id , {
        name: req.body.name,
        date: Date.now(),
    } )
        .then( item => {    
            res.status(200).json(   {
                success: true,
                msg: 'Updated successfully',
                updateID: req.params.id,
                body: req.body,
            } );
            console.log("Item with ID : ");
            console.log(req.params.id);
            console.log( "Updated successfully, with body");
            console.log(req.body);
        } )
        .catch( err => {
            res.status(404).json(   {
                success: false,
                msg: 'Updation Failed',
                updateID: req.params.id,
                body: req.body,
            })
            console.log("Item with ID : ");
            console.log(req.params.id);
            console.log( "Failed in Updation with body");
            console.log(req.body);
        } );

})

// @route DELETE api/items/:id
// @description Delete an item from it's ID.
// @access Public //Should be Private
router.delete('/:id',(req,res) => {
    Item.findById(req.params.id
        )
        .then(item => {
            item.remove()
                .then(  () => {
                    res.status(200).json(   {
                        success: true,
                        msg: 'Deleted successfully',
                        delID: req.params.id
                    });
                    console.log("Item with ID : ");
                    console.log(req.params.id);
                    console.log( "Deleted successfully");
                })
        })
        .catch(err => {
            res.status(404).json(   {
                success: false,
                msg: 'Deletion Failed',
                delID:  req.params.id
            })
            console.log("Item with ID : ");
            console.log(req.params.id);
            console.log( "Failed in Deletion");
        })
});


module.exports = router; 