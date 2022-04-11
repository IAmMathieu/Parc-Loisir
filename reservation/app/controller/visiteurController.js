const visiteurController = {
  getVisitor: async (req, res, next) => {
    res.json(await dataMapper.getVisitor(req.params.id));
  },
};

module.exports = visiteurController;
