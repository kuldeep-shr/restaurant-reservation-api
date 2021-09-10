const mongoose = require("mongoose");

const bookings = new mongoose.Schema({
	time: {
		type: Date,
	},
	user: {
		name: String,
		email: String,
		phone: String,
	},
	status: {
		type: String,
		default: "confirmed",
	},
});

module.exports = mongoose.model("Booking", bookings);
