import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditMusicoInstrumentoPage } from './add-edit-musico-instrumento.page';

describe('AddEditMusicoInstrumentoPage', () => {
  let component: AddEditMusicoInstrumentoPage;
  let fixture: ComponentFixture<AddEditMusicoInstrumentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddEditMusicoInstrumentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
