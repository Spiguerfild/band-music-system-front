import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelMusicoPage } from './sel-musico.page';

describe('SelMusicoPage', () => {
  let component: SelMusicoPage;
  let fixture: ComponentFixture<SelMusicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelMusicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
