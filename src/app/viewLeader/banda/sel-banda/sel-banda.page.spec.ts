import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelBandaPage } from './sel-banda.page';

describe('SelBandaPage', () => {
  let component: SelBandaPage;
  let fixture: ComponentFixture<SelBandaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelBandaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
