import { Component } from '@angular/core';
import { Proveedor } from '../../models/proveedor';
import { ProveedorService } from '../../service/proveedor.service';

@Component({
  selector: 'app-proveedor',
  standalone: true,
  imports: [],
  templateUrl: './proveedor.component.html',
  styleUrl: './proveedor.component.scss'
})
export class ProveedorComponent {

  proveedores:Proveedor[] = [];

  constructor(
    private proveedorServise:ProveedorService
  ) {

  }

  ngOnInit(): void {
    this.getAllProveedores();
  }

  getAllProveedores() {
    this.proveedorServise.getProveedores().subscribe((data)=> {
      this.proveedores = data;
    });
  }
}
