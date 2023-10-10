import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditEscalaPage } from './add-edit-escala.page';

describe('AddEditEscalaPage', () => {
  let component: AddEditEscalaPage;
  let fixture: ComponentFixture<AddEditEscalaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddEditEscalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
