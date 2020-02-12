module.exports = {
  create: (req, res) => {
    const dbInstance = req.app.get("db");
    const { name, description, price, image_url } = req.body;
    console.log(req.body);

    dbInstance
      .create_product([name, description, price, image_url])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send(err);
        console.log(err);
      });
  },

  getOne: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    console.log(id);

    dbInstance
      .read_product([id])
      .then(product => {
        console.log(product);
        res.status(200).send(product);
      })
      .catch(err => {
        res.status(500).send(err);
        console.log(err);
      });
  },

  getAll: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_products()
      .then(products => {
        res.status(200).send(products);
      })
      .catch(err => {
        res.status(500).send(err);
        console.log(err);
      });
  },

  update: (req, res) => {
    const dbInstance = req.app.get("db");
    const { params, query } = req;

    dbInstance
      .update_product([params.id, query.desc])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send(err);
        console.log(err);
      });
  },

  delete: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .delete_product(id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send(err);
        console.log(err);
      });
  }
};
