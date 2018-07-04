import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginResponseComponent } from './login-response.component';

describe('LoginResponseComponent', () => {
  let component: LoginResponseComponent;
  let fixture: ComponentFixture<LoginResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
