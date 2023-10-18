import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelMusicoInstrumentoPage } from './sel-musico-instrumento.page';

describe('SelMusicoInstrumentoPage', () => {
  let component: SelMusicoInstrumentoPage;
  let fixture: ComponentFixture<SelMusicoInstrumentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelMusicoInstrumentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
