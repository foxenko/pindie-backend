const categoriesRouter = require("express").Router();
const {
  findAllCategories,
  findCategoryById,
} = require("../middlewares/categories");
const {
  sendAllCategories,
  sendCategoryById,
} = require("../controllers/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

module.exports = categoriesRouter;
