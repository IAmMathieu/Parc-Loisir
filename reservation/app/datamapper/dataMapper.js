const client = require("../config/db");

const dataMapper = {
  getVisitor: async (id) => {
    const result = await client.query({
      text: "SELECT * FROM visiteur WHERE billet_num=$1",
      values: [id],
    });
    return result.rows[0];
  },
  getAllAttraction: async () => {
    const result = await client.query("SELECT * FROM attraction");
    return result.rows;
  },
  getRerservation: async (id) => {
    const result = await client.query({
      text: "SELECT reservation.* FROM visiteur JOIN reservation ON reservation.billet = visiteur.billet_num WHERE visiteur.id=$1",
      values: [id],
    });
    return result.rows[0];
  },
  addReservation: async (billedId, attractionId, placeCount) => {
    const result = await client.query({
      text: "INSERT INTO reservation (billet,attraction_id,participants,slot) VALUES($1,$2,$3,NOW()) RETURNING *",
      values: [billedId, attractionId, placeCount],
    });
    return result.rows[0];
  },
  addVisitor: async () => {
    const result = await client.query(
      "INSERT INTO visiteur (validation_start,validation_end) VALUES(NOW(),NOW()) RETURNING billet_num"
    );
    return result.rows[0];
  },
  addAttraction: async (
    name,
    capacity,
    open_schedule,
    closed_schedule,
    duration,
    mechanic,
    open
  ) => {
    const result = await client.query({
      text: "INSERT INTO attraction (name,capacity,open_schedule,closed_schedule,duration,isMechanic,isOpen) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *",
      values: [
        name,
        capacity,
        open_schedule,
        closed_schedule,
        duration,
        mechanic,
        open
      ],
    });
    return result.rows[0];
  },
  removeVisitor: async (id) => {
    const result = await client.query({
      text: "DELETE FROM visiteur WHERE id = $1",
      values: [id],
    });
    return true;
  },
  removeAttraction: async (id) => {
    const result = await client.query({
      text: "DELETE FROM attraction WHERE id = $1",
      values: [id],
    });
    return true;
  },
  removeReservation: async (id) => {
    const result = await client.query({
      text: "DELETE FROM reservation WHERE id = $1",
      values: [id],
    });
    return true;
  },
  updateReservation: async (data, id) => {
    const result = await client.query({
      text: `UPDATE post SET billet=COALESCE(NULLIF($2, ''), billet), attraction_id=COALESCE(NULLIF($3, ''), attraction_id), participants=COALESCE(NULLIF($4, ''), participants), slot=COALESCE(NULLIF($5, ''), slot) WHERE id=$1 RETURNING *`,
      values: [
        id,
        data.billet,
        data.attraction_id,
        data.participants,
        data.slot,
      ],
    });
    return result.rows[0];
  },
  updateAttraction: async (data, id) => {
    const result = await client.query({
      text: `UPDATE post SET name=COALESCE(NULLIF($2, ''), name), capacity=COALESCE(NULLIF($3, ''), capacity), open_schedule=COALESCE(NULLIF($4, ''), open_schedule), closed_schedule=COALESCE(NULLIF($5, ''), closed_schedule), duration=COALESCE(NULLIF($6, ''), duration),isMechanic=COALESCE(NULLIF($7, ''), isMechanic) WHERE id=$1 RETURNING *`,
      values: [
        id,
        data.name,
        data.capacity,
        data.open_schedule,
        data.closed_schedule,
        data.duration,
        data.isMechanic,
      ],
    });
    return result.rows[0];
  },
  updateVisitor: async (data, id) => {
    const result = await client.query({
      text: `UPDATE post SET billet_num=COALESCE(NULLIF($2, ''), billet_num), validation_start=COALESCE(NULLIF($3, ''), validation_start), validation_end=COALESCE(NULLIF($4, ''), validation_end) WHERE id=$1 RETURNING *`,
      values: [id, data.billet_num, data.validation_start, data.validation_end],
    });
    return result.rows[0];
  },
};

module.exports = dataMapper;
