import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewEscalaPage } from './view-escala.page';

describe('ViewEscalaPage', () => {
  let component: ViewEscalaPage;
  let fixture: ComponentFixture<ViewEscalaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewEscalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
