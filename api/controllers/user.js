import { db } from "../db.js";

export const getUsers = (_, res) => {
  const users = "SELECT * FROM users";
  db.query(users, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const insertUser =
    "INSERT INTO  users (`name`, `email`, `fone`, `birth_date`) VALUES(?)";

  const values = [
    req.body.name,
    req.body.email,
    req.body.fone,
    req.body.birth_date,
  ];
  db.query(insertUser, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("User created.");
  });
};

export const updateUser = (req, res) => {
  const updateUser =
    "UPDATE users SET `name` = ?, `email` = ?, `fone` = ?, `birth_date` = ? WHERE `id` = ?";

  const values = [
    req.body.name,
    req.body.email,
    req.body.fone,
    req.body.birth_date,
  ];

  db.query(updateUser, [...values, req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("User Updated");
  });
};

export const deleteUser = (req, res) => {
  const removeUser = "DELETE FROM users WHERE `id` = ?";

  db.query(removeUser, [req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("User Deleted");
  });
};
