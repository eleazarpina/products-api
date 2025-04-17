import { Product } from "../models/product.model";

const getAllProducts = async () =>{
  
  const products = await Product.findAll();

  return products;
};

const getProduct = async (productId: string) => {
  
  const product = await Product.findByPk( productId );

  return product;

};

const deleteProduct = async (productId: string) => {
  
  const project = await Product.findByPk( productId );  
  await project?.destroy();

  return true;

};

const updateProduct = async (
  productId: string,
  name: string, 
  description: string,  
  min_stock: number,  
) => {
  const project = await Product.findByPk( productId );

  await project?.update({ name, description, min_stock });
  await project?.save();
  
  return project;
};




const createProduct = async (
  name: string, 
  description: string,
  prod_line: string, 
  min_stock: number,
  created_by: string
) => {
  const newProduct = await Product.build({ name, description, prod_line, min_stock, created_by });
  await newProduct.save();
  
  return newProduct;
};



export const ProductService = {
  getAllProducts,
  getProduct,  
  createProduct,
  updateProduct,
  deleteProduct,
}