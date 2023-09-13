import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFollowComponent } from './order-follow.component';

describe('OrderFollowComponent', () => {
  let component: OrderFollowComponent;
  let fixture: ComponentFixture<OrderFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderFollowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
