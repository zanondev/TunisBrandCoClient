import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { IOrder } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-follow',
  templateUrl: './order-follow.component.html',
  styleUrls: ['./order-follow.component.css'],
})
export class OrderFollowComponent implements OnInit {
  public status: number = 0;
  public id: number = 0;

  constructor(private service: OrderService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {this.id = params['id']});

    
      this.service.getStatus(this.id)
      .pipe(take(1)).subscribe((status: number)=>{
        this.status = status;
      })
    }
  }
