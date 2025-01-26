import { Router } from 'express';
import produtoController from '../controllers/produto.controller.js';

const route = Router();


// ------ Rotas -------
route.get("/", produtoController.findAll);
route.post("/", produtoController.create);


export default route;   

