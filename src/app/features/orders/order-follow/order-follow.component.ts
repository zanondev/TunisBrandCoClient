import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-follow',
  templateUrl: './order-follow.component.html',
  styleUrls: ['./order-follow.component.css']
})
export class OrderFollowComponent implements OnInit {
  public product: IOrder = {} as IOrder;
  public status: number = 0;
  public status1: boolean = true;
  public status2: boolean = true;
  public status3: boolean = true;

  constructor(private service: OrderService, private route: ActivatedRoute) {}

  ngOnInit(): void {
  //   this.route.params.subscribe(params => {this.status = params['status']});

  //   if(this.status == 1)
  // {
  //   this.status1 = true;
  // }
  // if(this.status == 2)
  // {
  //   this.status2 = true;
  // }
  // if(this.status == 3)
  // {
  //   this.status3 = true;
  // }

  }

  





  

}
