import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditBandaPage } from './edit-banda.page';

describe('EditBandaPage', () => {
  let component: EditBandaPage;
  let fixture: ComponentFixture<EditBandaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditBandaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
