import { Component, OnInit } from '@angular/core';
import { InstrumentoDTO } from 'src/app/models/InstrumentoDTO';
import { instrumentoService } from 'src/app/services/domain/instrumento.service';

@Component({
  selector: 'app-edit-instrumento',
  templateUrl: './edit-instrumento.page.html',
  styleUrls: ['./edit-instrumento.page.scss'],
})
export class EditInstrumentoPage implements OnInit {

  instrumentos!: InstrumentoDTO[];

  constructor(public instrumentoService: instrumentoService) { }

  ionViewDidEnter() {
    this.instrumentoService.findAll()
      .subscribe(response => {
        this.instrumentos = response;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }
  ngOnInit() {
  }

}
