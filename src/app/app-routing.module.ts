import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientEditComponent } from './features/clients/client-edit/client-edit.component';
import { ClientFormComponent } from './features/clients/client-form/client-form.component';
import { ClientTableComponent } from './features/clients/client-table/client-table.component';
import { OrderFormComponent } from './features/orders/order-form/order-form.component';
import { OrderTableComponent } from './features/orders/order-table/order-table.component';
import { ProductEditComponent } from './features/products/product-edit/product-edit.component';
import { ProductFormComponent } from './features/products/product-form/product-form.component';
import { ProductTableComponent } from './features/products/product-table/product-table.component';
import { HomePageComponent } from './templates/Index/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'clients',
    children: [
      { path: 'table', component: ClientTableComponent },
      { path: 'form', component: ClientFormComponent },
      { path: 'edit/:id', component: ClientEditComponent },
    ],
  },
  {
    path: 'products',
    children: [
      { path: 'table', component: ProductTableComponent },
      { path: 'form', component: ProductFormComponent },
      { path: 'edit/:id', component: ProductEditComponent },
    ],
  },
  {
    path: 'orders',
    children: [
      { path: 'table', component: OrderTableComponent },
      { path: 'form', component: OrderFormComponent },
    ],
  },
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
