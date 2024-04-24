const mongodb = require("../db/connect");

const getData = async (req, res) => {
    const result = await mongodb.getDb().db().collection("user").find();
    result.toArray().then(lists => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(lists[0]);
    });
};

module.exports = { getData };