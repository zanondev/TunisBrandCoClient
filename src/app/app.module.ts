import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { ClientTableComponent } from './features/clients/client-table/client-table.component';
import { ClientFormComponent } from './features/clients/client-form/client-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './features/clients/client.service';
import { ProductTableComponent } from './features/products/product-table/product-table.component';
import { ProductFormComponent } from './features/products/product-form/product-form.component';
import { OrderTableComponent } from './features/orders/order-table/order-table.component';
import { OrderFormComponent } from './features/orders/order-form/order-form.component';
import { HomePageComponent } from './templates/Index/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,  
    ClientTableComponent,
    ClientFormComponent,
    ProductTableComponent,
    ProductFormComponent,
    OrderTableComponent,
    OrderFormComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
