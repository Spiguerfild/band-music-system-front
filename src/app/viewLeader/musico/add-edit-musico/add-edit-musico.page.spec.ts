import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditMusicoPage } from './add-edit-musico.page';

describe('AddEditMusicoPage', () => {
  let component: AddEditMusicoPage;
  let fixture: ComponentFixture<AddEditMusicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddEditMusicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
