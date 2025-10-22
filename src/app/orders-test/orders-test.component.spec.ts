import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersTestComponent } from './orders-test.component';

describe('OrdersTestComponent', () => {
  let component: OrdersTestComponent;
  let fixture: ComponentFixture<OrdersTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersTestComponent]
    });
    fixture = TestBed.createComponent(OrdersTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
