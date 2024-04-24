import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDevComponent } from './login-dev.component';

describe('LoginDevComponent', () => {
  let component: LoginDevComponent;
  let fixture: ComponentFixture<LoginDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
