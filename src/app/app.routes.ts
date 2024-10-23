import { Routes } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { ProductoComponent } from './components/producto/producto.component';

export const routes: Routes = [
    {
        path:'categorias',
        component:CategoriaComponent,
        title:'Categorias'
    },
    {
        path:'proveedores',
        component:ProveedorComponent,
        title:'Proveedores'
    },
    {
        path:'productos',
        component:ProductoComponent,
        title:'Productos'
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    },

];
