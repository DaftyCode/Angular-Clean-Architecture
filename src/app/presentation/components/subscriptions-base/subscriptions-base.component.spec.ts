import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsBaseComponent } from './subscriptions-base.component';

describe('SubscriptionsBaseComponent', () => {
  let component: SubscriptionsBaseComponent;
  let fixture: ComponentFixture<SubscriptionsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [SubscriptionsBaseComponent]
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
