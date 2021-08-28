import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRequestNewPasswordComponent } from './auth-request-new-password.component';

describe('AuthRequestNewPasswordComponent', () => {
  let component: AuthRequestNewPasswordComponent;
  let fixture: ComponentFixture<AuthRequestNewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthRequestNewPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRequestNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
