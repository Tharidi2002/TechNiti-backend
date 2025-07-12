import { Request, Response } from 'express';
import * as productService from '../services/product.service';
// import {Product} from "../model/product.model";

// controller function to hande get all products
export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productService.getAllProducts()
        res.status(200).json(products);
    } catch (error) {
        console.error((error));
        res.status(500).json({ message: 'Something wont wrong!' });
    }
}

// controller function to handle save product
export const saveProduct = async (req: Request, res: Response) => {
    try {
        const newProduct = req.body;
        const validationError = productService.validateProduct(newProduct); //verify the valid product
        if(validationError){
            res.status(400).json({ message: validationError });
            return;
        }
        const savedProduct = await productService.saveProduct(newProduct);
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error((error));
        res.status(500).json({ message: 'Something wont wrong!' });
    }
}

// controller function to handle get product
export const getProduct = async (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    if(isNaN(productId)){
        res.status(400).json({ error: 'Invalid product ID' });
        return;
    }
    const product = await productService.getProductById(productId);
    if(!product){
        res.status(404).json({ error: 'Product not found' });
        return;
    }
    res.status(200).json(product);
}

// controller function to handle update product
export const updateProduct = async (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    if(isNaN(productId)){
        res.status(400).json({ error: 'Invalid product ID' });
        return;
    }
    const updatedData = req.body;
    const updatedProduct = await productService.updateProduct(productId, updatedData);
    if(!updatedProduct){
        res.status(404).json({ error: 'Product not found' });
        return;
    }
    res.status(200).json(updatedProduct);
}

// controller function to handle delete product
export const deleteProduct = async (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    if(isNaN(productId)){
        res.status(400).json({ error: 'Invalid product ID' });
        return;
    }
    const deleteProduct = await productService.deleteProduct(productId);
    if(!deleteProduct){
        res.status(404).json({ error: 'Product not found' });
        return;
    }
    res.status(200).json({ message: 'Product deleted successfully' });
}