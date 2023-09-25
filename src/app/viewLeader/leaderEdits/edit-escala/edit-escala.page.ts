import { Component, OnInit } from '@angular/core';
import { NoiteDeApresentacaoDTO } from 'src/app/models/NoiteDeApresentacaoDTO';
import { noiteDeApresentacaoService } from 'src/app/services/domain/noiteDeApresentacao.service';
@Component({
  selector: 'app-edit-escala',
  templateUrl: './edit-escala.page.html',
  styleUrls: ['./edit-escala.page.scss'],
})
export class EditEscalaPage implements OnInit {

  escalas!: NoiteDeApresentacaoDTO[];

  constructor(private noiteDeApresentacaoService: noiteDeApresentacaoService) { }

  ionViewDidEnter() {
    this.noiteDeApresentacaoService.findAll()
      .subscribe(response => {
        this.escalas = response;
        console.log(response);
      }, error => {
        console.log(error);
      });

  }

  ngOnInit() {
  }

}
