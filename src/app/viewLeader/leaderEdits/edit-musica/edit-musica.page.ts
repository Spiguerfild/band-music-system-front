import { Component, OnInit } from '@angular/core';
import { MusicaDTO } from 'src/app/models/MusicaDTO';
import { MusicaService } from 'src/app/services/domain/musica.service';

@Component({
  selector: 'app-edit-musica',
  templateUrl: './edit-musica.page.html',
  styleUrls: ['./edit-musica.page.scss'],
})
export class EditMusicaPage implements OnInit {

  musicas!: MusicaDTO[];
  isModalOpen = false;
  constructor(public musicaService: MusicaService) { }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  //findall().subscribe(res => {}, err => {})
  ionViewDidEnter() {
    this.musicaService.findAll()
      .subscribe(response => {
        this.musicas = response;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }




  ngOnInit() {
  }

}
