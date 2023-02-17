const express = require ("express");
const adminController = require ('../../Controllers/adminController');

const router = express.Router();

router 
.route('/') 
.get(adminController.getAdmin)
.post(adminController.createAdmin);

router
.route('/:id')
.get(adminController.getoneAdmin);

module.exports = router;