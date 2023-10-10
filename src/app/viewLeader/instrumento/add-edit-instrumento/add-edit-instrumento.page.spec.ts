import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditInstrumentoPage } from './add-edit-instrumento.page';

describe('AddEditInstrumentoPage', () => {
  let component: AddEditInstrumentoPage;
  let fixture: ComponentFixture<AddEditInstrumentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddEditInstrumentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
