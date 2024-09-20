import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItem3Component } from './new-item3.component';

describe('NewItem3Component', () => {
  let component: NewItem3Component;
  let fixture: ComponentFixture<NewItem3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewItem3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewItem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
