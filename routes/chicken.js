const express = require("express");
const router = express.Router();
const {
  getAllChicken,
  createChicken,
  getSingleChicken,
  updateChicken,
  replaceChicken,
  deleteChicken,
} = require("../controllers/chicken");

router.route("/").get(getAllChicken).post(createChicken);
router
  .route("/:id")
  .get(getSingleChicken)
  .put(replaceChicken)
  .patch(updateChicken)
  .delete(deleteChicken);

// just to emphasize the run haha
router.route("/:id/run").patch(updateChicken);

module.exports = router;
