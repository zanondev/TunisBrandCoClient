import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { IClient } from '../../clients/client.model';
import { IProduct } from '../../products/product.model';
import { ProductService } from '../../products/product.service';
import { IOrder } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit{
  public form!: FormGroup;

  constructor(private service: OrderService) {}
  
  
  ngOnInit(): void {
   
    this.form = new FormGroup({
      clientId: new FormControl(null, [
        Validators.required,
        Validators.min(1),
      ]),
      productId: new FormControl(null, [Validators.required, Validators.min(1)]),
      productQuantity: new FormControl(null, [Validators.required, Validators.min(1)]),
    });
  }
  public saveForm(): void {
    if (this.form.valid) {
      const newOrder: IOrder = {
        id: 0,
        client: {
          id: this.form.get('clientId')?.value,
          name: "",
          cpf: "",
          birthDate: new Date(),
          loyaltyPoints: 0,
        },
        product: {
          id: this.form.get('productId')?.value,
          description: "",
          expiryDate: new Date(),
          isActive: true,
          price: 0,
          stockQuantity: 0,
        },
        clientName: '',
        productQuantity: this.form.get('productQuantity')?.value,
        totalPrice: 0,
        orderDate: new Date(),
        status: 1,
        productId: 0,
        clientId: 0,
      };

      this.service
        .addOrder(newOrder)
        .pipe(take(1))
        .subscribe(() => {
          alert('Pedido cadastrado com sucesso!');
          location.reload();
        });
    }
  }

  public cleanForm() {
    this.form.reset();
  }



  }


