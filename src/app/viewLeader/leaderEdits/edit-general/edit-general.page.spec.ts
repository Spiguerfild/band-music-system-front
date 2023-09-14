import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditGeneralPage } from './edit-general.page';

describe('EditGeneralPage', () => {
  let component: EditGeneralPage;
  let fixture: ComponentFixture<EditGeneralPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
