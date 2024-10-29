import { Component } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../service/categoria.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

  categorias:Categoria[] = [];
  categoriaById:Categoria | null = null;

  formCategoria!:FormGroup;

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private categoriaService:CategoriaService
  ) {
    this.formCategoria = this.fb.group({
      idCategoria: [null],
      descripcion: ['', Validators.required],
      fechaAlta: [null],
      estatus: ['S']
    });
  }

  ngOnInit(): void {
    this.getAllCategorias();
  }

  getAllCategorias() {
    this.categoriaService.getCategorias().subscribe((data)=> {
      this.categorias = data;
    });
  }

  createCategoria() {
    this.categoriaService.createCategoria(this.formCategoria.value).subscribe({
      next:()=> {
        this.router.navigateByUrl('/categorias');
      }
    });
  }

  // getCategoriaById(id:number) {
  //   this.categoriaService.getCategoriaById(id).subscribe((data)=> {
  //     this.categoriaById = data;
  //   })
  // }
}
