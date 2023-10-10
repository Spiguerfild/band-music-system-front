import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelInstrumentoPage } from './sel-instrumento.page';

describe('SelInstrumentoPage', () => {
  let component: SelInstrumentoPage;
  let fixture: ComponentFixture<SelInstrumentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelInstrumentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
