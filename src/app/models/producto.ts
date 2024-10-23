import { Categoria } from "./categoria";
import { Proveedor } from "./proveedor";

export interface Producto {
    idProducto: number;
    codigoProducto: string;
    descripcion: string;
    precioVenta: number;
    precioCompra: number;
    unidadMedida: string;
    fechaAlta: string;
    estatus: string;
    categoria: Categoria;
    proveedor: Proveedor;
};