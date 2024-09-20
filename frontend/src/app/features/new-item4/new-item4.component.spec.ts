import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItem4Component } from './new-item4.component';

describe('NewItem4Component', () => {
  let component: NewItem4Component;
  let fixture: ComponentFixture<NewItem4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewItem4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewItem4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
