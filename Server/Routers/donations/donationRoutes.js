const express = require ("express");
const donationController = require ('../../Controllers/donationController');
 
const router = express.Router();
 
router 
.route('/')
.get(donationController.getDonation)
.post(donationController.createDonation);



router
.route('/:id')
.get(donationController.getoneDonation);

module.exports = router;

