const routes = require("express").Router();
const controller = require("../controllers/professional");

routes.get("/professional", controller);

module.exports = routes;