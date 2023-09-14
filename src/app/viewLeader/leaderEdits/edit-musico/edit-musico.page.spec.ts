import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditMusicoPage } from './edit-musico.page';

describe('EditMusicoPage', () => {
  let component: EditMusicoPage;
  let fixture: ComponentFixture<EditMusicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditMusicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
