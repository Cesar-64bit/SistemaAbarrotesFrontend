import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'http://localhost:8080/categorias';

  constructor(private http:HttpClient) { }

  getCategorias():Observable<Categoria[]> {
    console.log(this.http.get<Categoria[]>(this.apiUrl));
    return this.http.get<Categoria[]>(this.apiUrl);
  }

  getCategoriaById(id:number):Observable<Categoria> {
    return this.http.get<Categoria>(`${this.apiUrl}/${id}`);
  }
}
