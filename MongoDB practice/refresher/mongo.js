const MongoClient = require("mongodb").MongoClient;

const url = `mongodb+srv://hyeon9811:QLRYc2RzPhPvOLiO@cluster0.a4t4m8y.mongodb.net/places_test?retryWrites=true&w=majority&appName=Cluster0`;

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection("products").insertOne(newProduct);
  } catch (error) {
    return res.json({ message: "Could not store data." });
  }
  client.close();
  res.json(newProduct);
};

const getProducts = async (req, res, next) => {};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
