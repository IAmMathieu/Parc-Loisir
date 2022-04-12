const dataMapper = require("../model/datamapper");

const incidentController = {
  async getAllIncident(req, res) {
    const results = await dataMapper.getAllIncident();
    res.render("index", {results: results.rows});
  },

  async getIncidentById(req, res) {
    const incidentId = req.params.id;
    const result = await dataMapper.getIncidentById(incidentId);

    res.render("incident_details", {result: result.rows[0]});

  },

  async updateIncidentById(req, res) {
    const incidentId = req.params.id;
    const data = req.body;
    const result = await dataMapper.updateIncidentById(incidentId, data);

    res.send(result.rows[0]);
  },

  async addNewIncidentForm(req, res) {

    const attractions = await dataMapper.getAllAttractions();

    res.render("incident_add", {attractions: attractions.rows});
  },

  async addNewIncident(req, res) {
    const data = req.body;
    await dataMapper.addNewIncident(data);
    res.redirect('/');
  },

  async incidentIsResolved(req, res) {
    const incidentId = req.body.id;
    await dataMapper.resolveIncident(incidentId);
    res.redirect(`/incident/${incidentId}`);
  }
};

module.exports = incidentController;
