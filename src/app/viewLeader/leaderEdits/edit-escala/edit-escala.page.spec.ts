import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditEscalaPage } from './edit-escala.page';

describe('EditEscalaPage', () => {
  let component: EditEscalaPage;
  let fixture: ComponentFixture<EditEscalaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditEscalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
