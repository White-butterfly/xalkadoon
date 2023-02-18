const mongoose = require('mongoose');
const donationSchema = mongoose.Schema({
		name : {
			type: String,
		},
		amount: {
			type: Number,
		},
		donor: {
			type: String,
		
		}, 
		message: {
			type: String
		},
		donationType: {
			type: String	
		},
	
});

 const  donation = mongoose.model("donation", donationSchema);
 module.exports = donation;

