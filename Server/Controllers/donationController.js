const donationModel = require('.././Models/donations/donationModel');
// const regionModel = require('.././Models/regionsModel');
 

// getting all donation Data


exports.getDonation = async (req, res) => {	
	try {
		const donation = await donationModel.find({});
		res.status(200).json({
			message: "all donation",
			data: donation,
		});
	} catch (e) {
		res.status(400).json({
			message: e.message,
		});
	}
}

// creating a new donation data
	exports.createDonation = async (req, res) => {
		try {
			const createDonation = await donationModel.create(req.body);
			res.status(200).json({
				message: "donation created",
				data: createDonation,
			});
		} catch (e) {
			res.status(400).json({
				message: e.message,
			});
		}
	}

//  getting donation data with id

exports.getoneDonation = async (req, res) => {
	try {
		const donationn = await donationModel.findById(req.params.id);
		res.status(200).json({
			message: "You searched it and it is here ",
			data: donationn,
		});
	} catch (e) {
		res.status(400).json({
			message: e.message,
		});
	}
}


