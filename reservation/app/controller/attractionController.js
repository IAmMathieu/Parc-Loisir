const dataMapper = require("../datamapper/dataMapper");
const DateParser = require("../service/dateParser");

const attractionController = {
  getEvents: async (req, res, next) => {
    let attraction = await dataMapper.getAllAttraction();
    attraction.forEach((e) => {
      let new_date = new Date();
      let open_date = new DateParser(e.open_schedule).convert();
      let close_date = new DateParser(e.closed_schedule).convert();
      let current_date = new DateParser({hours: new_date.getHours(),minutes: new_date.getMinutes(),seconds: new_date.getSeconds()}).convert();
      let duration_date = new DateParser(e.duration).convert();
      e.isopen =
        current_date.isSuperior(open_date.timeObject) && close_date.isSuperior(current_date.timeObject) && close_date.isSuperior(current_date.add(duration_date.timeObject).timeObject) && e.isopen
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
  addAttraction: async (req,res,next) => {
    res.json(await dataMapper.addAttraction("test",6,"NOW()","NOW()","NOW()",true,true));
  }
};

module.exports = attractionController;