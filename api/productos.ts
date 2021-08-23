class Productos {
  innerId: number;
  productos: {
    id: string;
    timestamp: number;
    nombre: string;
    descripcion: string;
    codigo: string;
    precio: number;
    stock: number;
  }[];

  constructor() {
    this.innerId = 0;
    this.productos = [];
  }

  //   Crud
  agregarProducto(
    nombre: string,
    descripcion: string,
    codigo: string,
    precio: number,
    stock: number
  ) {
    this.innerId += 1;
    const producto = {
      id: String(this.innerId),
      timestamp: Date.now(),
      nombre,
      descripcion,
      codigo,
      precio,
      stock,
    };
    this.productos.push(producto);
    return producto;
  }

  //   cRud
  muestraUnProducto(id: string) {
    const producto = this.productos.find((elemento) => elemento.id === id);
    if (producto === undefined) {
      throw new Error('Producto no encontrado');
    }
    return producto;
  }

  muestraTodos() {
    return this.productos;
  }

  //   crUd
  modificaUnProducto(
    id: string,
    nombreNuevo: string,
    descripcionNuevo: string,
    codigoNuevo: string,
    precioNuevo: number,
    stockNuevo: number
  ) {
    const producto = this.productos.find((elemento) => elemento.id === id);
    if (producto === undefined) {
      throw new Error('Producto no encontrado');
    }
    producto.timestamp = Date.now();
    producto.nombre = nombreNuevo;
    producto.descripcion = descripcionNuevo;
    producto.codigo = codigoNuevo;
    producto.precio = precioNuevo;
    producto.stock = stockNuevo;
  }

  eliminaUnProducto(id: string) {
    const indiceParaEliminar = this.productos.findIndex(
      (elemento) => elemento.id === id
    );
    if (indiceParaEliminar === -1) {
      throw new Error('Producto no encontrado');
    }
    const eliminado = this.productos[indiceParaEliminar];
    this.productos.splice(indiceParaEliminar, 1);
    return eliminado;
  }
}

export default new Productos();
