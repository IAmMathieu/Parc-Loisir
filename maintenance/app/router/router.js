const express = require("express");
const routerWrapper = require("../middleware/routerWrapper");
const incidentController = require("../controller/incidentController");
const APIError = require("../service/APIError");


const router = express.Router();

router.route("/").get(routerWrapper(incidentController.getAllIncident));

router
  .route("/incident/:id(\\d+)")
  .get(routerWrapper(incidentController.getIncidentById))
  .post(routerWrapper(incidentController.updateIncidentById));

router
  .route("/incident/new")
  .get(routerWrapper(incidentController.addNewIncidentForm))
  .post(routerWrapper(incidentController.addNewIncident));

router
  .route("/incident/resolved")
  .post(routerWrapper(incidentController.incidentIsResolved));

router.use((req, _, next) => {
  throw new APIError("This url cannot be found", req.url, 404);
});

module.exports = router;
