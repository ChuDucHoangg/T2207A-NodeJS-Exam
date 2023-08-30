const express = require("express");
const router = express.Router();
const controller = require("../controllers/product.controller");

router.get("/",controller.Product)
router.get("/formproduct",controller.FormProduct)
router.post("/formproduct",controller.PostFormProduct)
router.get("/deleteproduct/:id",controller.Delete);

module.exports = router;