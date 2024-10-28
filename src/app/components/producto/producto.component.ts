import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {

  productos:Producto[] = [];

  constructor(
    private productoService:ProductoService
  ) {

  }

  ngOnInit(): void {
    this.getAllProductos();
  }

  getAllProductos() {
    this.productoService.getProductos().subscribe((data)=> {
      this.productos = data;
    })
  }
}
