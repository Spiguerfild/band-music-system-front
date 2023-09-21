import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterBandaPage } from './register-banda.page';

describe('RegisterBandaPage', () => {
  let component: RegisterBandaPage;
  let fixture: ComponentFixture<RegisterBandaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterBandaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
