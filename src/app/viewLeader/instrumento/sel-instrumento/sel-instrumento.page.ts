import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstrumentoDTO } from 'src/app/models/InstrumentoDTO';
import { instrumentoService } from 'src/app/services/domain/instrumento.service';

@Component({
  selector: 'app-sel-instrumento',
  templateUrl: './sel-instrumento.page.html',
  styleUrls: ['./sel-instrumento.page.scss'],
})
export class SelInstrumentoPage implements OnInit {
  instrumentos!: InstrumentoDTO[];
  constructor(private instrumentoService: instrumentoService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.instrumentoService.findAll()
      .subscribe(response => {
        this.instrumentos = response;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

  toAddEditInstrumento(id: number) {
    this.router.navigate([`add-edit-instrumento/${id}`])
  }
  backPage(rota: string) { // função que volta pra uma pagina especifica
    this.router.navigate([`/${rota}`])
  }
}
