import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicoInstrumentoDTO } from 'src/app/models/MusicoInstrumentoDTO';
import { musicoInstrumentoService } from 'src/app/services/domain/musicoInstrumento.service';

@Component({
  selector: 'app-sel-musico-instrumento',
  templateUrl: './sel-musico-instrumento.page.html',
  styleUrls: ['./sel-musico-instrumento.page.scss'],
})
export class SelMusicoInstrumentoPage implements OnInit {


  musicosInstrumentos!: MusicoInstrumentoDTO[];
  constructor(private musicoInstrumentoService: musicoInstrumentoService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.musicoInstrumentoService.findAll()
      .subscribe(response => {
        this.musicosInstrumentos = response;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

  toAddEditMusicoIns(id: number) {
    this.router.navigate([`add-edit-musico-instrumento/${id}`])
  }
  backPage(rota: string) { // função que volta pra uma pagina especifica
    this.router.navigate([`/${rota}`])
  }

}
