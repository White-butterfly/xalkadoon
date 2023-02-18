const regionModel = require('.././Models/regionsModel');
  

// getting all regions
exports.getRegion = async (req, res) => {
	try {
	  const regions = await regionModel.find({});
      
	  res.status(200).json({
	    message: "all regions",
	    data: regions,
	  });
	} catch (e) {
	  res.status(400).json({
	    message: e.message,
	  });
	}
      };

      
// creating a new region data

exports.createRegion = async (req, res) => {
	try {
	  const createRegion = await regionModel.create(req.body);
	  res.status(200).json({
	    message: "region created",
	    data: createRegion,
	  });
	} catch (e) {
	  res.status(400).json({
	    message: e.message,
	  });
	}
      };

      
//  getting region data with id

exports.getoneRegion = async (req, res) => {
	try {
	  const regionn = await regionModel.findById(req.params.id);
	  res.status(200).json({
	    message: "You searched it and it is here ",
	    data: regionn,
	  });
	} catch (e) {
	  res.status(400).json({
	    message: e.message,
	  });
	}
      };