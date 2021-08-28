import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSaveNewPasswordComponent } from './auth-save-new-password.component';

describe('AuthSaveNewPasswordComponent', () => {
  let component: AuthSaveNewPasswordComponent;
  let fixture: ComponentFixture<AuthSaveNewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthSaveNewPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSaveNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
