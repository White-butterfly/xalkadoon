const express = require ("express");
const regionController = require ('../../Controllers/regionController');

const router = express.Router();
 

router 
.route('/') 
.get(regionController.getRegion) 
.post(regionController.createRegion);

router
.route('/:id')
.get(regionController.getoneRegion);

module.exports = router;