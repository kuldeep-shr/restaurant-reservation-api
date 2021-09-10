const express = require("express");
const router = express.Router();

const {
	parentRoute,
	booking,
	cancelledBooking,
} = require("../controller/reservation");

router.get("/", parentRoute);
router.post("/book", booking);
router.patch("/cancelled", cancelledBooking);

module.exports = router;
