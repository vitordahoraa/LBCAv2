import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemControllerComponent } from './new-item-controller.component';

describe('NewItemControllerComponent', () => {
  let component: NewItemControllerComponent;
  let fixture: ComponentFixture<NewItemControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewItemControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewItemControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
