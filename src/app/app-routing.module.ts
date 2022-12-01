import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './features/clients/client-form/client-form.component';
import { ClientTableComponent } from './features/clients/client-table/client-table.component';

const routes: Routes = [
  {
    path: 'clients',
    children: [
      { path: 'table', component: ClientTableComponent },
      { path: 'form', component: ClientFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
