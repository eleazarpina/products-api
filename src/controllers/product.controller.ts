import { Request, Response, NextFunction } from "express";

import { ProductService } from "../services/product.service";
import { HttpError } from "../utils/httpError.util";
import { productSchema } from "../schemas/product.schema";

const getProduct = async ( req: Request, res: Response, next: NextFunction) => {
  try {

    const { id } = req.params;
    
    const product = await ProductService.getProduct( id );

    if ( !product ) throw new HttpError( 'Product not found', 404 );

    res.json( product );

  } catch (error) {
    console.log(error)
    next ( error );
  }
};

const deleteProduct = async ( req: Request, res: Response, next: NextFunction) => {
  try {

    const { id } = req.params;
    
    const product = await ProductService.deleteProduct( id );

    if ( !product ) throw new HttpError( 'Product not found', 404 );

    res.json({ message: 'Product deleted successfully' });

  } catch (error) {
    // console.log(error)
    next ( error );
  }
};

const updateProduct = async ( req: Request, res: Response, next: NextFunction) => {
  try {

    const { name, description, min_stock } = req.body;
    const { id } = req.params;
    
    const product = await ProductService.updateProduct( id, name, description, min_stock );

    if ( !product ) throw new HttpError( 'Product not found', 404 );

    res.json({ message: 'Product updated successfully' });

  } catch (error) {
    // console.log(error)
    next ( error );
  }
};


const getProducts = async( req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await ProductService.getAllProducts();

    res.json( products );

  } catch ( error ) {
    next( error )
    // console.log( error );
    // if ( error instanceof Error ) {
    //   res.status( 500 ).json( {  
    //     error: error.message,
    //   });
    // }
    // else {
    //   res.status( 500 ).json( { 
    //     error: "Error de Servidor",
    //   });
    // }
  }
};

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    const { uid } = req;   
  

    if (!uid) throw new HttpError("No token", 401);

    const { error, value } = productSchema.validate( req.body );

    if ( error ) {      
      throw new HttpError( error.message, 400 );
    }

    const { name, description, prod_line, min_stock } = value;

    const newProduct = await ProductService.createProduct( name, description, prod_line, min_stock, uid )
    res.status(201).json({ newProduct });
  } catch (error) {
    next(error);
  }
};

export const productController = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};