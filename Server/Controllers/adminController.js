const adminModel = require('.././Models/adminModel');
 
// getting all Admin Data

exports.getAdmin = async (req, res) => {	
	try {
		const admin = await adminModel.find({}); //All data

		// drugWells
      const drugWells1 = await adminModel.find({drugWells: "less than 4"});
      const drugWells2= await adminModel.find({drugWells: "between 4 and 10"});
      const drugWells3= await adminModel.find({drugWells: "More than 10"});

// Berkads
      const Berkads1 = await adminModel.find({Berkads: "less than 4"});
      const Berkads2= await adminModel.find({Berkads: "between 4 and 10"});
      const Berkads3= await adminModel.find({Berkads: "More than 10"});

// Dams
const Dam1 = await adminModel.find({Dams: "less than 4"});
const Dam2= await adminModel.find({Dams: "between 4 and 10"});
const Dam3= await adminModel.find({Dams: "More than 10"});

		res.status(200).json({
			message: "all admin",
			siciid: admin,
			
			drugWells1: drugWells1,
			drugWells2: drugWells2,
			drugWells3: drugWells3,
			
			Berkads1: Berkads1,
			Berkads2: Berkads2,
			Berkads3: Berkads3,
			
			Dams1: Dam1,
			Dams2: Dam2,
			Dams2: Dam3,


			
		});
	} catch (e) {
		res.status(400).json({
			message: e.message,
		});
	}
}

// creating a new admin data
	exports.createAdmin = async (req, res) => {
		try {
			const createAdmin = await adminModel.create(req.body);
			res.status(200).json({
				message: "admin created",
				data: createAdmin,
			});
		} catch (e) {
			res.status(400).json({
				message: e.message,
			});
		}
	}
 
//  getting admin data with id

exports.getoneAdmin = async (req, res) => {
	try {
		const adminn = await adminModel.findById(req.params.id);
		res.status(200).json({
			message: "You searched it and it is here ",
			data: adminn,
		}); 
	} catch (e) {
		res.status(400).json({
			message: e.message,
		});
	}
}




