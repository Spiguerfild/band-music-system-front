import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditBandaPage } from './add-edit-banda.page';

describe('AddEditBandaPage', () => {
  let component: AddEditBandaPage;
  let fixture: ComponentFixture<AddEditBandaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddEditBandaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
