import {Router} from "express";
import {deleteProduct, getAllProducts, getProduct, saveProduct, updateProduct} from "../controller/product.controller";
import {authorizeRoles} from "../middleware/auth.middleware";

const productRoutes:Router = Router();

// handling the request for the product list
productRoutes.get("/all", getAllProducts); // Get All
productRoutes.post("/save", authorizeRoles('admin'), saveProduct); // Save
productRoutes.get("/:id", getProduct); //Get by ID
productRoutes.put("/update/:id", authorizeRoles('admin'), updateProduct); // Update by ID
productRoutes.delete("/delete/:id", authorizeRoles('admin'), deleteProduct); // Delete by ID


export default productRoutes;