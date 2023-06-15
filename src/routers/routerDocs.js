import { Router } from "express";
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
      
      const routerDocs = Router();

    
      const options = {
        definition: {
          openapi: '3.0.0',
          info: {
            version: '1.0.0',
            title: 'Express API with Swagger',
            description:
              'A simple CRUD API made with Express and documented with Swagger',
          },
        },
        apis: ['./docs/**/*.yaml'],
      }
      
      const specs = swaggerJsdoc(options)
      
      
      routerDocs.use('/', swaggerUi.serve, swaggerUi.setup(specs))
      


     
   
   export default routerDocs