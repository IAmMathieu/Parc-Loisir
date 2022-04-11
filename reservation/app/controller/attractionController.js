const dataMapper = require("../datamapper/dataMapper");

const attractionController = {
  getEvents: async (req, res, next) => {
    let attraction = await dataMapper.getAllAttraction();
    attraction.forEach((e) => {
      e.open =
        e.open_schedule < Date.now() && e.closed_schedule > Date.now()
          ? true
          : false;
    });
    res.json(attraction);
  },
  getReservation: async (req, res, next) => {
    res.json(await dataMapper.getRerservation(req.params.id));
  },
  addReservation: async (req, res, next) => {
    if (req.params.place < 1 || req.params.place > 4)
      return res.json("{error:invalid place count}");
    res.json(
      await dataMapper.addReservation(
        await dataMapper.getVisitor(req.params.id),
        req.params.attraction_id,
        req.params.place
      )
    );
  },
};

module.exports = attractionController;
