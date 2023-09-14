import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditMusicaPage } from './edit-musica.page';

describe('EditMusicaPage', () => {
  let component: EditMusicaPage;
  let fixture: ComponentFixture<EditMusicaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditMusicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
