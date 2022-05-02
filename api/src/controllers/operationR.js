const { Operation, Type, User } = require("../db");

const getAllOps = async (req, res) => {
  try {
    const operations = await Operation.findAll({
      include: [
        { model: Type, attributes: ["type"] },
        { model: User, attributes: ["username", "email"] },
      ],
    });
    res.status(200).sent(operations);
  } catch (err) {
    console.error(err);
  }
};
const addOp = async (req, res) => {
  const { concetp, amount } = req.body;
  const { id } = req.params;
  try {
    const operation = await Operation.create({
      concetp,
      amount,
      userId: id,
    });
    res.status(201).send(operation);
  } catch (err) {
    console.error(err);
  }
};

model.export = { getAllOps, addOp };
