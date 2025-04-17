import express from 'express';
import productRoute from './routes/product.route';
import authRoute from './routes/auth.route';

import { sequelize } from './config/database.config';
import { httpErrorHandle } from './middlewares/httpErrorHandle.middleware';

import 'dotenv/config'


const app = express();
app.use( express.json() );
app.use( express.urlencoded({ extended: true }));
const port = process.env.HTTP_PORT || 3001;


app.use( '/api/v1/products', productRoute);
app.use( '/api/v1/auth', authRoute);


app.use( httpErrorHandle );


const main = async()  => {
  try {    
    
    await sequelize.sync();

    console.log( 'Conectado correctamente a la Base de Datos' );
    

    app.listen(port, () => {
      console.log(`Eleazar Pina - Hito-5 listening on port ${port}`)
    })

  } catch (error) {
    console.log( error );
  }
};


main();