const mongoose = require("mongoose");
const regionSchema = mongoose.Schema({
	region: {
	  type: String,
	},
	rainfallAmount: {
		type: String,
	      },
	      probability: {
		type: String,
	      },
      });
      
      const Model = mongoose.model("region", regionSchema);
      module.exports = Model;

