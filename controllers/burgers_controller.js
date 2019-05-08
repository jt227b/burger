var express = require("express");

var router = express.Router();

var burger = require("../models/burger");


router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function (req, res) {
    burger.insert(["burger_name"], [req.body.burger_name], function (result) {
        res.json({
            id: result.insertId
        });
    });
});

router.put("/burgers/:id", function (req, res) {
    var id = "id = " + req.params.id;

    burger.update({
        devoured: req.body.devoured
    }, 
    id, function (result) {
        if (result.changedRows == 0) {
  
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/burgers/:id", function (req, res) {
    var id = "id = " + req.params.id;

    burger.delete(id, function (result) {
        if (result.affectedRows == 0) {
 
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;