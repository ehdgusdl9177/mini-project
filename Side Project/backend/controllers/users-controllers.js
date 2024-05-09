const { v4: uuidv4 } = require("uuid");
const uuid = uuidv4();
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");

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
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError("Invalid inputs passed, please check your data.", 422);
  }
  const { name, email, password } = req.body;

  const hasUser = DUMMY_PLACES.find((u) => u.email === email);
  if (hasUser) {
    throw new HttpError("Could not identify user, email already exists.", 422);
  }

  const createUser = {
    id: uuid,
    name,
    email,
    password,
  };

  DUMMY_PLACES.push(createUser);

  res.status(201).json({ user: createUser });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_PLACES.find((p) => p.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError(
      "Could not identify user, credentials seem to be wrong.",
      401
    );
  }
  res.json({ message: "Logged in!" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
