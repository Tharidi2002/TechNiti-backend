import {Router} from "express";
import {deleteProduct, getAllProducts, getProduct, saveProduct, updateProduct} from "../controller/product.controller";

const productRoutes:Router = Router();

// handling the request for the product list
productRoutes.get("/all", getAllProducts); // Get All
productRoutes.post("/save", saveProduct); // Save
productRoutes.get("/:id", getProduct); //Get by ID
productRoutes.put("/update/:id", updateProduct); // Update by ID
productRoutes.delete("/delete/:id", deleteProduct); // Delete by ID


export default productRoutes;