const { Router } = require("express");

// const checkAuth = require('../utils/checkAuth');
const { getAllOps } = require("../controllers/operationR");
const opRouter = Router();

opRouter.get("/", getAllOps);
// opRouter.get('/:id', operationR.getOp);
opRouter.post('/', addOp);
// opRouter.put('/:id', checkAuth, operationR.updateOp);
// opRouter.delete('/:id', checkAuth, operationR.deleteOp);

module.exports = opRouter;
