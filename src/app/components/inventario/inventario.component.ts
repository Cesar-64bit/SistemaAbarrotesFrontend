import { Component } from '@angular/core';
import { Inventario } from '../../models/inventario';
import { InventarioService } from '../../service/inventario.service';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.scss'
})
export class InventarioComponent {

  inventario:Inventario[] = [];

  constructor(
    private invetarioService:InventarioService
  ){ 

  }

  ngOnInit(): void {
    this.getAllInventario();
  }

  getAllInventario() {
    this.invetarioService.getInventario().subscribe((data)=> {
      this.inventario = data;
    })
  }
}
