import productos from './productos';

class Carrito {
  innerId: number;
  carrito: {
    id: string;
    timestamp: number;
    producto: {
      id: string;
      timestamp: number;
      nombre: string;
      descripcion: string;
      codigo: string;
      precio: number;
      stock: number;
    };
  }[];

  constructor() {
    this.innerId = 0;
    this.carrito = [];
  }

  agregarProducto(productoId: string) {
    this.innerId += 1;
    const producto = productos.muestraUnProducto(productoId);
    const alcarro = {
      id: String(this.innerId),
      timestamp: Date.now(),
      producto,
    };
    this.carrito.push(alcarro);
    return alcarro;
  }

  muestraUnProducto(id: string) {
    const producto = this.carrito.find((elemento) => elemento.id === id);
    if (producto === undefined) {
      throw new Error('Producto no encontrado');
    }
    return producto;
  }

  muestraTodos() {
    return this.carrito;
  }

  eliminaUnProducto(id: string) {
    const indiceParaEliminar = this.carrito.findIndex(
      (elemento) => elemento.id === id
    );
    if (indiceParaEliminar === -1) {
      throw new Error('Producto no encontrado');
    }
    const eliminado = this.carrito[indiceParaEliminar];
    this.carrito.splice(indiceParaEliminar, 1);
    return eliminado;
  }
}

export default new Carrito();
