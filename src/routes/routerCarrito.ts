import carrito from '../../api/carrito';
import { Router, Request, Response } from 'express';

const routerCarrito = Router();

routerCarrito.get('/listar', (req: Request, res: Response) => {
  res.json(carrito.muestraTodos());
});

routerCarrito.get('/listar/:id', (req: Request, res: Response) => {
  res.json(carrito.muestraUnProducto(req.params.id));
});

routerCarrito.post('/agregar/:id_producto', (req: Request, res: Response) => {
  res.json(carrito.agregarProducto(req.params.id_producto));
});

routerCarrito.delete('/borrar/:id', (req: Request, res: Response) => {
  res.json(carrito.eliminaUnProducto(req.params.id));
});

export default routerCarrito;
