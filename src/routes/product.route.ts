import { Router } from 'express';

import { productController } from '../controllers/product.controller';
import { verifyToken } from '../middlewares/jwt.middleware';


const router = Router();

router.use( verifyToken );

router.get( '/' , productController.getProducts);

router.get( '/:id' , productController.getProduct);

router.delete( '/:id' , productController.deleteProduct);

router.put( '/:id' , productController.updateProduct);

router.post("/" , productController.createProduct);


export default router;