const categoriesRouter = require("express").Router();
const {
  findAllCategories,
  findCategoryById,
  createCategory,
  deleteCategory,
  updateCategory,
  checkIsCategoryExists,
  checkEmptyName,
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
  checkIsCategoryExists,
  checkEmptyName,
  createCategory,
  sendCategoryCreated
);

categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  updateCategory,
  sendCategoryUpdated
);
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;
