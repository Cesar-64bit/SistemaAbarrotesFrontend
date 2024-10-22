import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [TableModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

  categorias:Categoria[] = [];

  constructor(
    private categoriaService:CategoriaService
  ) {

  }

  ngOnInit(): void {
    this.getAllCategorias();
  }

  getAllCategorias() {
    this.categoriaService.getCategorias().subscribe((data)=> {
      this.categorias = data;
    })
  }
}
