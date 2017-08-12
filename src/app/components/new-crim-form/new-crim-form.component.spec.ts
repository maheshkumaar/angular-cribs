import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCrimFormComponent } from './new-crim-form.component';

describe('NewCrimFormComponent', () => {
  let component: NewCrimFormComponent;
  let fixture: ComponentFixture<NewCrimFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCrimFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCrimFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
