import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { IOrder } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent {
  public orders: IOrder[] = [];

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.orderService.getOrder()
    .pipe(take(1)).subscribe((orderList: IOrder[])=>{
      this.orders = orderList;
    })
  }

   public updateOrder(id:number)
   {
    this.router.navigate(['/orders/update', id])
   }

  //  public deletar(cpfCLiente:string){
  //   this.clientService.deleteCliente(cpfCLiente)
  //   .pipe(take(1)).subscribe(() => {
  //     alert(O cliente com CPF: ${cpfCLiente} foi alterado com sucesso!);
  //   });
  //  }
}
