import productos from '../models/productos';
import { Request, Response, NextFunction } from 'express';

class controlProductos {
  productoExiste(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const producto = productos.find(id);
    if (!producto) {
      res.status(404).json({ error: `Producto con id ${id} no encontrado` });
    }
    next();
  }

  muestraProducto(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const consulta = id ? productos.read(id) : productos.read();
    res.json(consulta);
  }

  agregaProducto(req: Request, res: Response, next: NextFunction) {
    const datos = req.body;
    const agregado = productos.create(datos);
    res.json({
      msg: `Producto ${agregado.id} agregado exitosamente`,
      producto: agregado,
    });
  }

  modificaProducto(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const nuevo = req.body;
    const modificado = productos.update(id, nuevo);
    res.json({
      msg: `Producto ${id} modificado exitosamente`,
      producto: modificado,
    });
  }

  eliminaProducto(req: Request, res: Response, nex: NextFunction) {
    const { id } = req.params;
    const eliminado = productos.read(id);
    productos.delete(id);
    res.json({
      msg: `Producto ${id} eliminado exitosamente`,
      producto: eliminado,
    });
  }
}

export default new controlProductos();
