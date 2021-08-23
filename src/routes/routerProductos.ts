import productos from '../../api/productos';
import { Router, Request, Response } from 'express';

const routerProductos = Router();

routerProductos.get('/listar', (req: Request, res: Response) => {
  res.json(productos.muestraTodos());
});

routerProductos.get('/listar/:id', (req: Request, res: Response) => {
  res.json(productos.muestraUnProducto(req.params.id));
});

routerProductos.post('/agregar', (req: Request, res: Response) => {
  res.json(productos.agregarProducto(req.body));
});

routerProductos.put('/actualizar/:id', (req: Request, res: Response) => {
  res.json(productos.modificaUnProducto(req.params.id, req.body));
});

routerProductos.delete('/borrar/:id', (req: Request, res: Response) => {
  res.json(productos.eliminaUnProducto(req.params.id));
});

export default routerProductos;
