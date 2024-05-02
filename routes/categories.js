const categoriesRouter = require("express").Router();
const {
  findAllCategories,
  findCategoryById,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../middlewares/categories");
const {
  sendAllCategories,
  sendCategoryById,
  sendCategoryCreated,
  sendCategoryDeleted,
  sendCategoryUpdated,
} = require("../controllers/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.put("/categories/:id", updateCategory, sendCategoryUpdated);
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;
