import { Component } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

  categorias:Categoria[] = [];
  categoriaById:Categoria | null = null;

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
    });
  }

  // getCategoriaById(id:number) {
  //   this.categoriaService.getCategoriaById(id).subscribe((data)=> {
  //     this.categoriaById = data;
  //   })
  // }
}
