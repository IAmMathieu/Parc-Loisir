const dataMapper = require("../model/datamapper");

const incidentController = {
  async getAllIncident(req, res, next) {
    const results = await dataMapper.getAllIncident();

    res.send(results.rows);
  },

  async getIncidentById(req, res, next) {
    const incidentId = req.params.id;
    const result = await dataMapper.getIncidentById(incidentId);

    res.send(result.rows[0]);
  },

  async updateIncidentById(req, res, next) {
    const incidentId = req.params.id;
    const data = req.body;
    const result = await dataMapper.updateIncidentById(incidentId, data);

    res.send(result.rows[0]);
  },
};

module.exports = incidentController;
