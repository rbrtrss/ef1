import carrito from '../models/carrito';
import productos from '../models/productos';
import { Request, Response, NextFunction } from 'express';

class controlCarrito {
  productoExiste(req: Request, res: Response, next: NextFunction) {
    const { id_producto } = req.params;
    const producto = productos.find(id_producto);
    if (!producto) {
      return res
        .status(404)
        .json({ error: `Producto con id ${id_producto} no encontrado` });
    }
    next();
  }
  articuloExiste(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    console.log(id);
    const articulo = carrito.find(id);
    if (!articulo) {
      return res
        .status(404)
        .json({ error: `Articulo con id ${id} no encontrado` });
    }
    next();
  }

  muestraArticulo(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const consulta = id ? carrito.read(id) : carrito.read();
    res.json(consulta);
  }

  agregaArticulo(req: Request, res: Response, next: NextFunction) {
    const { id_producto } = req.params;
    // const producto = productos.find(id_producto);
    // if (producto !== undefined) {
    // console.log(producto);
    const agregado = carrito.create(id_producto);
    res.json({
      msg: `Articulo ${agregado.id} agregado exitosamente`,
      producto: agregado,
    });
  }

  eliminaArticulo(req: Request, res: Response, nex: NextFunction) {
    const { id } = req.params;
    const eliminado = carrito.read(id);
    carrito.delete(id);
    res.json({
      msg: `Articulo ${id} eliminado exitosamente`,
      producto: eliminado,
    });
  }
}

export default new controlCarrito();
