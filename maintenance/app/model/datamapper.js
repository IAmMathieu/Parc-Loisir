const client = require("../config/dbclient");

const dataMapper = {
  async getAllIncident() {
    const query = {
      text: "SELECT * FROM maintenance ORDER BY id",
    };

    const results = await client.query(query);
    return results;
  },
  async getIncidentById(id) {
    const query = {
      text: `SELECT * FROM maintenance WHERE maintenance.id = $1`,
      values: [id],
    };
    const result = await client.query(query);
    return result;
  },

  async updateIncidentById(id, data) {
    const query = {
      text: `UPDATE maintenance SET operator=COALESCE(NULLIF($2, ''), operator), resolution_date=COALESCE(NULLIF($3, ''), resolution_date), attraction_os=COALESCE(NULLIF($4, ''), attraction_os), attraction_cs=COALESCE(NULLIF($5, ''), attraction_cs) WHERE maintenance.id=$1 RETURNING *`,
      values: [
        id,
        data.operator,
        data.resolution_date,
        data.attraction_os,
        data.attraction_cs,
      ],
    };

    const result = await client.query(query);
    return result;
  },

  async addNewIncidentForm() {
    res.render();
  },

  async addNewIncident(data) {
    const query = {
      text: `INSERT INTO incident(report_time, attraction_id, nature, operator) VALUES (NOW()::TIMESTAMPTZ(0),$1, $2, $3)`,
      values: [
        data.attraction_id,
        data.nature,
        data.operator
      ],
    };

    const result = await client.query(query);
    return result
  },

  async getAllAttractions() {
    const query = {
      text: "SELECT id, name FROM attraction"
    };
    

    const results = await client.query(query);

    return results
  },

  async resolveIncident(id) {
    
    const query = {
      text:"UPDATE incident SET resolution_date=NOW()::TIMESTAMPTZ(0) WHERE id=$1",
      values:[id]
    };
    
    const result = await client.query(query);
    return result;
   },
};

module.exports = dataMapper;
