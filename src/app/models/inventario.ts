import { Producto } from "./producto";

export interface Inventario {
    idInventario: number;
    cantidad: number;
    fechaActualizacion: string;
    producto: Producto;
};