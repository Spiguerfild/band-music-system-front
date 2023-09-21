import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterGeneralPage } from './register-general.page';

describe('RegisterGeneralPage', () => {
  let component: RegisterGeneralPage;
  let fixture: ComponentFixture<RegisterGeneralPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
