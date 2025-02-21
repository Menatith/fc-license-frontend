import { Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { UpdateFormComponent } from './update-form/update-form.component';

export const routes: Routes = [
  {
    path: '',
    component: TableComponent,
    title: 'License Overview',
  },
  {
    path: 'update/:id',
    component: UpdateFormComponent,
    /* loadComponent: () => import('./update-form.component').then(c => c.UpdateFormComponent) */
    title: 'Update Page',
  },
];
