module.exports = {
  getHouses: async (req, res) => {
    const db = req.app.get("db");
    const data = await db.get_houses();
    res.status(200).send(data);
  },
  createHouse: async (req, res) => {
    const db = req.app.get("db");
    const { name, address, city, state, zip } = req.body;
    const data = await db.create_house(name, address, city, state, zip);

    res.status(200).send(data);
  },
  deleteHouse: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const data = await db.delete_house(id);
    if (data) {
      res.sendStatus(200);
    }

    res.status(500).send(`Couldn't delete House!`);
  },
};
