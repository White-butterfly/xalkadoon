const adminModel = require('.././Models/adminModel');

// getting all Admin Data

exports.getAdmin = async (req, res) => {	
	try {
		const admin = await adminModel.find({});
		res.status(200).json({
			message: "all admin",
			data: admin,
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




