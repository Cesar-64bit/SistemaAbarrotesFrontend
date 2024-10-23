import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'http://localhost:8080/productos';

  constructor(private http:HttpClient) { }

  getProductos():Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  getProductoById(id:number):Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`)
  }
}
