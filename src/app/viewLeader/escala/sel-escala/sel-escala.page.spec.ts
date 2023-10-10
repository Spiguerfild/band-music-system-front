import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelEscalaPage } from './sel-escala.page';

describe('SelEscalaPage', () => {
  let component: SelEscalaPage;
  let fixture: ComponentFixture<SelEscalaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelEscalaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
