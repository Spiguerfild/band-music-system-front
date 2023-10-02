import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterEscalaPage } from './register-escala.page';

describe('RegisterEscalaPage', () => {
  let component: RegisterEscalaPage;
  let fixture: ComponentFixture<RegisterEscalaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterEscalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
