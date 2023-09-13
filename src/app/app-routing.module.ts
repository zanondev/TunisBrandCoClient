import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientEditComponent } from './features/clients/client-edit/client-edit.component';
import { ClientFormComponent } from './features/clients/client-form/client-form.component';
import { ClientTableComponent } from './features/clients/client-table/client-table.component';
import { OrderEditComponent } from './features/orders/order-edit/order-edit.component';
import { OrderFollowComponent } from './features/orders/order-follow/order-follow.component';
import { OrderFormComponent } from './features/orders/order-form/order-form.component';
import { OrderTableComponent } from './features/orders/order-table/order-table.component';
import { ProductAddStockComponent } from './features/products/product-add-stock/product-add-stock.component';
import { ProductEditComponent } from './features/products/product-edit/product-edit.component';
import { ProductFormComponent } from './features/products/product-form/product-form.component';
import { ProductTableComponent } from './features/products/product-table/product-table.component';
import { AboutComponent } from './templates/about/about.component';
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
      { path: 'add/:id', component: ProductAddStockComponent },
    ],
  },
  {
    path: 'orders',
    children: [
      { path: 'table', component: OrderTableComponent },
      { path: 'form', component: OrderFormComponent },
      { path: 'edit/:id', component: OrderEditComponent },
      { path: 'follow/:id', component: OrderFollowComponent },
    ],
  },
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
