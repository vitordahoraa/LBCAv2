import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItem2Component } from './new-item2.component';

describe('NewItem2Component', () => {
  let component: NewItem2Component;
  let fixture: ComponentFixture<NewItem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewItem2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
