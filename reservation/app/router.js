const express = require("express");
const routerWrapper = require("./middleware/routerWrapper");
const visiteurController = require("./controller/visiteurController");
const attractionController = require("./controller/attractionController");

const router = express.Router();

router
  .route("/")
  .get(routerWrapper(visiteurController.displayRegister))
  .post(routerWrapper(visiteurController.registerTicket));

router.route("/init/:id").get(routerWrapper(visiteurController.getVisitor));
router.route("/events").get(routerWrapper(attractionController.getEvents));
router.route("/bookings").get(routerWrapper(attractionController.getReservation));
router.route("/book").put(routerWrapper(attractionController.addReservation));
router.route("/test").get(routerWrapper(attractionController.addAttraction));

module.exports = router;