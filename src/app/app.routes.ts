import { Routes } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';

export const routes: Routes = [
    {
        path:'categorias',
        component:CategoriaComponent,
        title:'Categorias'
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    },

];
