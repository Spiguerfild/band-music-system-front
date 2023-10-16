import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoiteDeApresentacaoDTO } from 'src/app/models/NoiteDeApresentacaoDTO';
import { noiteDeApresentacaoService } from 'src/app/services/domain/noiteDeApresentacao.service';

@Component({
  selector: 'app-view-escala',
  templateUrl: './view-escala.page.html',
  styleUrls: ['./view-escala.page.scss'],
})
export class ViewEscalaPage implements OnInit {

  dataFim: string = ''; // Data de fim
  dataInicio = new Date()
  escalas: NoiteDeApresentacaoDTO[] = [];
  filteredEscalas: NoiteDeApresentacaoDTO[] = [];
  idParam: number = Number(this.route.snapshot.paramMap.get('id'));
  constructor(
    private escalaService: noiteDeApresentacaoService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit() {
  }


  ionViewDidEnter() {
    this.escalaService.findAll().subscribe(
      (response) => {
        this.escalas = response;
        this.applyDateFilter();

        // Classifique as escalas por data após a filtragem (ou sem filtro)
        this.filteredEscalas.sort((a, b) => {
          const dataA = new Date(a.data[0], a.data[1] - 1, a.data[2]);
          const dataB = new Date(b.data[0], b.data[1] - 1, b.data[2]);
          return dataA.getTime() - dataB.getTime();
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }



  applyDateFilter() { /*continuar daqui*/
    const timestamp = Date.now(); // Substitua isso pela sua data

    // Crie um objeto Date a partir do timestamp
    const data = new Date(timestamp);


  }

  parseDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split('/').map((part) => +part);
    return new Date(year, month - 1, day); // Mês em JavaScript é base 0, subtrai 1.
  }
}
