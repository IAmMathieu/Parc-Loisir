const express = require("express");
const routerWrapper = require("./middleware/routerWrapper");
const incidentController = require("./controller/incidentController");

const router = express.Router();

router.use("/").get(routerWrapper(incidentController.getAllIncident));

router
  .use("/incident/:id(\\d+)")
  .get(routerWrapper(incidentController.getIncidentById))
  .post(routerWrapper(incidentController.updateIncidentById));

router
  .use("/incident/new")
  .get(routerWrapper(incidentController.addNewIncidentForm))
  .post(routerWrapper(incidentController.addNewIncident));

router.use((req, _, next) => {
  throw new APIError("This url cannot be found", req.url, 404);
});

module.exports = router;
