const mongoose = require('mongoose');
const adminSchema =  mongoose.Schema({
	// const regionSchema = mongoose.Schema({
	Name : {
	type: String,	
	}, 
	drugWells:{
		type:String, 
	},
	Berkads: {
		type:String, 
	},
	Dams:{
		type:String,
	},
	rainfall:{
		type:Number,
	},
	propability:{
		type:Number,
	},
	typee:{
		type:String,
	},
	population:{
		type: Number,
	},
 

});

const admin = mongoose.model("admin", adminSchema);
module.exports = admin;

