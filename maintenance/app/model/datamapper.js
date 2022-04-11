const client = require("../config/dbclient");

const dataMapper = {
  async getAllIncident() {
    const query = {
      text: "SELECT maintenance.incident_id, nature, operator, resolution_date, attraction.name, report_time FROM maintenance JOIN incident ON maintenance.incident_id=incident.incident_id JOIN attraction ON maintenance.attraction_id=attraction.id",
    };

    const results = await client.query(query);
    return results;
  },
  async getIncidentById(id) {
    const query = {
      text: `SELECT maintenance.incident_id, nature, operator, resolution_date, attraction.name, report_time FROM maintenance JOIN incident ON maintenance.incident_id=incident.incident_id JOIN attraction ON maintenance.attraction_id=attraction.id WHERE maintenance.incident_id=$1`,
      value: [id],
    };
    const result = await client.query(query);
    return result;
  },

  async updateIncidentById(id, data) {
    const query = {
      text: `UPDATE maintenance SET incident.operator=COALESCE(NULLIF($2, ''), operator), incident.resolution_date=COALESCE(NULLIF($3, ''), resolution_date) JOIN incident WHERE maintenance.incident_id=$1 RETURNING maintenance.incident_id, nature, operator, resolution_date, attraction.name, report_time`,
      values: [id, data.operator, data.resolution_date],
    };

    const result = await client.query(query);
    return result;
  },
};

module.exports = dataMapper;
