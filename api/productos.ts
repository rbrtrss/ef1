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
  agregarProducto(datos: {
    nombre: string;
    descripcion: string;
    codigo: string;
    precio: number;
    stock: number;
  }) {
    this.innerId += 1;
    const producto = {
      id: String(this.innerId),
      timestamp: Date.now(),
      nombre: datos.nombre,
      descripcion: datos.descripcion,
      codigo: datos.codigo,
      precio: datos.precio,
      stock: datos.stock,
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
    if (this.productos.length === 0) {
      return { error: 'No hay productos cargados' };
    }
    return this.productos;
  }

  //   crUd
  modificaUnProducto(
    id: string,
    nuevos: {
      nombre: string;
      descripcion: string;
      codigo: string;
      precio: number;
      stock: number;
    }
  ) {
    const producto = this.productos.find((elemento) => elemento.id === id);
    if (producto === undefined) {
      throw new Error('Producto no encontrado');
    }
    producto.timestamp = Date.now();
    producto.nombre = nuevos.nombre;
    producto.descripcion = nuevos.descripcion;
    producto.codigo = nuevos.codigo;
    producto.precio = nuevos.precio;
    producto.stock = nuevos.stock;
    return producto;
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
