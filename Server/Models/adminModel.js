const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
	Name : {
	type: String,	
	},
	drugWells:{
		type:Number,
	},
	Berkads: {
		type:Number,
	},
	Dams:{
		type:Number,
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