import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelMusicaPage } from './sel-musica.page';

describe('SelMusicaPage', () => {
  let component: SelMusicaPage;
  let fixture: ComponentFixture<SelMusicaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelMusicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
