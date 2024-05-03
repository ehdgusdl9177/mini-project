const { v4: uuidv4 } = require("uuid");
const uuid = uuidv4();

const DUMMY_PLACES = [
  {
    id: "u1",
    name: "Max Schwarz",
    email: "test@test.com",
    password: "testers",
  },
];

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_PLACES });
};

const signup = (req, res, next) => {
  const { name, email, password } = req.body;

  const createUser = {
    id: uuid,
    name,
    email,
    password,
  };

  DUMMY_PLACES.push(createUser);

  res.status(201).json({ user: createUser });
};

const login = (req, res, next) => {};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
