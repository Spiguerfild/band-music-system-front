import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditInstrumentoPage } from './edit-instrumento.page';

describe('EditInstrumentoPage', () => {
  let component: EditInstrumentoPage;
  let fixture: ComponentFixture<EditInstrumentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditInstrumentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
