import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { IOrder } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  public order: IOrder = {} as IOrder;
  public id: number = 0;
  public form!: FormGroup;

  constructor(private service: OrderService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.form = new FormGroup({
      status: new FormControl(null, [
        Validators.required 
      ]) 
    } );

    this.route.params.subscribe(params => {this.id = params['id']});

  }

 

  public saveForm(): void {
    if (this.form.valid) {

      let status = this.form.get('status')?.value;
      let statusInt = 0;

      if(status == 'Em andamento')
      statusInt = 1;
      if(status == 'Em transito')
      statusInt = 2;
      if(status == 'Finalizado')
      statusInt = 3;

      const newOrder: IOrder = {
        id: this.id,
        client: {
          id: 0,
          name: "",
          cpf: "",
          birthDate: new Date(),
          loyaltyPoints: 0,
        },
        product: {
          id: 0,
          description: "",
          expiryDate: new Date(),
          isActive: true,
          price: 0,
          stockQuantity: 0,
        },
        clientName: '',
        productQuantity: 0,
        totalPrice: 0,
        orderDate: new Date(),
        status: statusInt,
        productId: 0,
        clientId: 0,
      };

      this.service
        .updateOrder(this.id, statusInt)
        .pipe(take(1))
        .subscribe(() => {
        });
      }
      alert('Status do pedido editado com sucesso!');
      location.reload();
  }

  public cleanForm() {
    this.form.reset();
  }



  }

  
