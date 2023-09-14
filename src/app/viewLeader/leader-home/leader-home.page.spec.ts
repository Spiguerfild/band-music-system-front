import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaderHomePage } from './leader-home.page';

describe('LeaderHomePage', () => {
  let component: LeaderHomePage;
  let fixture: ComponentFixture<LeaderHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LeaderHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
