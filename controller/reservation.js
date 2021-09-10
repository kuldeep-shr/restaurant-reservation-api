const dbBooking = require("../model/Booking");
const { showMessage } = require("../misc/message");

//welcome route
exports.parentRoute = async (req, res) => {
	return res.status(200).json({
		status: true,
		msg: showMessage.welcome,
	});
};

//table booking
exports.booking = async (req, res) => {
	console.log(req.body);
	const { time, name, email, phone } = req.body;

	//first we need to check availability
	try {
		const getData = await dbBooking.find({ time: time });
		if (getData.length < 5 || getData === undefined) {
			await new dbBooking({
				time: time,
				"user.name": name,
				"user.email": email,
				"user.phone": phone,
			})
				.save()
				.then(() => {
					return res.status(200).json({
						status: true,
						msg: `${showMessage.booked} ${time}`,
					});
				})
				.catch(() => {
					return res.status(500).json({
						status: false,
						msg: `${showMessage.serverError}`,
					});
				});
		} else {
			const pendingStatus = await dbBooking
				.find({ status: "pending" })
				.countDocuments({});
			if (pendingStatus === 5) {
				return res.status(400).json({
					status: true,
					msg: `${showMessage.full}`,
				});
			} else {
				await new dbBooking({
					time: time,
					"user.name": name,
					"user.email": email,
					"user.phone": phone,
					status: "pending",
				}).save();
				return res.status(400).json({
					status: true,
					msg: `${showMessage.pending}`,
				});
			}
		}
	} catch (e) {
		return res.status(500).json({
			status: false,
			msg: `${showMessage.serverError}`,
		});
	}
};

//cancelled table booking
exports.cancelledBooking = async (req, res) => {
	const { phone } = req.query;

	//1) fetch the data
	await dbBooking
		.findOneAndUpdate(
			{ "user.phone": phone },
			{ status: "cancelled" },
			{
				new: false,
			}
		)
		.then(async (data) => {
			await dbBooking
				.findOneAndUpdate(
					{ status: "pending" },
					{
						time: data.time,
						status: "confirmed",
					},
					{
						new: false,
					}
				)
				.then((data) => {
					return res.status(200).json({
						status: true,
						msg: `${showMessage.cancelled} ${data.time}`,
					});
				})
				.catch(() => {
					return res.status(500).json({
						status: false,
						msg: `${showMessage.serverError}`,
					});
				});
		});
};
