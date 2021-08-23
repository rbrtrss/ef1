import productos from '../../api/productos';
import { Router, Request, Response } from 'express';

const routerProductos = Router();

const ADMINISTRADOR = false;

const permisoAdministrador = (req: Request, res: Response, next: any) => {
  if (ADMINISTRADOR) {
    return next();
  }
  res.json({ error: 'ruta no autorizada' });
};

routerProductos.get('/listar', (req: Request, res: Response) => {
  res.json(productos.muestraTodos());
});

routerProductos.get('/listar/:id', (req: Request, res: Response) => {
  res.json(productos.muestraUnProducto(req.params.id));
});

routerProductos.post(
  '/agregar',
  permisoAdministrador,
  (req: Request, res: Response) => {
    res.json(productos.agregarProducto(req.body));
  }
);

routerProductos.put(
  '/actualizar/:id',
  permisoAdministrador,
  (req: Request, res: Response) => {
    res.json(productos.modificaUnProducto(req.params.id, req.body));
  }
);

routerProductos.delete(
  '/borrar/:id',
  permisoAdministrador,
  (req: Request, res: Response) => {
    res.json(productos.eliminaUnProducto(req.params.id));
  }
);

export default routerProductos;
