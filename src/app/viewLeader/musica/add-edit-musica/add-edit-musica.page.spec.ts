import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditMusicaPage } from './add-edit-musica.page';

describe('AddEditMusicaPage', () => {
  let component: AddEditMusicaPage;
  let fixture: ComponentFixture<AddEditMusicaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddEditMusicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
