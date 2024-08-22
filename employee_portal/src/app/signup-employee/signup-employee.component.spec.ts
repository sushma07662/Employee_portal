import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupEmployeeComponent } from './signup-employee.component';

describe('SignupEmployeeComponent', () => {
  let component: SignupEmployeeComponent;
  let fixture: ComponentFixture<SignupEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupEmployeeComponent]
    });
    fixture = TestBed.createComponent(SignupEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
