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
        .sort({date: -1})
        .then(items => res.json(books))
        .catch (err=> res.status(404).json({noitemsfound:"No Items Found"}));
});


// @route POST api/items
// @description Create a post for an Item.
// @access Public //Should be Private
router.post('/',(req,res) => {
    const newItem = new Item({
        name: req.body.name,
    });
});


module.exports = router; 