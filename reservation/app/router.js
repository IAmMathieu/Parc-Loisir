const express = require("express");
const routerWrapper = require("./middleware/routerWrapper");
const visiteurController = require("./controller/visiteurController");
const attractionController = require("./controller/attractionController");

const router = express.Router();

router
  .use("/")
  .get(routerWrapper(visiteurController.displayRegister))
  .post(routerWrapper(visiteurController.registerTicket));

router.use("/init").get(routerWrapper(visiteurController.getVisitor));
router.use("/events").get(routerWrapper(attractionController.getEvents));
router.use("/bookings").get(routerWrapper(attractionController.getReservation));
router.use("/book").put(routerWrapper(attractionController.addReservation));

module.exports = router;
