import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicaDTO } from 'src/app/models/MusicaDTO';
import { MusicaService } from 'src/app/services/domain/musica.service';

@Component({
  selector: 'app-sel-musica',
  templateUrl: './sel-musica.page.html',
  styleUrls: ['./sel-musica.page.scss'],
})
export class SelMusicaPage implements OnInit {

  musicas!: MusicaDTO[];
  constructor(private musicaService: MusicaService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.musicaService.findAll()
      .subscribe(response => {
        this.musicas = response;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

  toAddEditMusica(id: number) {
    this.router.navigate([`add-edit-musica/${id}`])
  }
  backPage(rota: string) { // função que volta pra uma pagina especifica
    this.router.navigate([`/${rota}`])
  }
}
