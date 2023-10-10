import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoiteDeApresentacaoDTO } from 'src/app/models/NoiteDeApresentacaoDTO';
import { noiteDeApresentacaoService } from 'src/app/services/domain/noiteDeApresentacao.service';

@Component({
  selector: 'app-sel-escala',
  templateUrl: './sel-escala.page.html',
  styleUrls: ['./sel-escala.page.scss'],
})
export class SelEscalaPage implements OnInit {

  escalas!: NoiteDeApresentacaoDTO[];
  constructor(private escalaService: noiteDeApresentacaoService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.escalaService.findAll()
      .subscribe(response => {
        this.escalas = response;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

  toAddEditEscala(id: number) {
    this.router.navigate([`add-edit-escala/${id}`])
  }
  backPage(rota: string) { // função que volta pra uma pagina especifica
    this.router.navigate([`/${rota}`])
  }
}
