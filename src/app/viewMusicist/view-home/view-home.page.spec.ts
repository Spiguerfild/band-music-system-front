import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewHomePage } from './view-home.page';

describe('ViewHomePage', () => {
  let component: ViewHomePage;
  let fixture: ComponentFixture<ViewHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
