import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingpageComponent } from './shoppingpage.component';

describe('ShoppingpageComponent', () => {
  let component: ShoppingpageComponent;
  let fixture: ComponentFixture<ShoppingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
