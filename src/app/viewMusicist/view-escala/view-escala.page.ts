import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoiteDeApresentacaoDTO } from 'src/app/models/NoiteDeApresentacaoDTO';
import { noiteDeApresentacaoService } from 'src/app/services/domain/noiteDeApresentacao.service';

@Component({
  selector: 'app-view-escala',
  templateUrl: './view-escala.page.html',
  styleUrls: ['./view-escala.page.scss'],
  providers: [DatePipe],
})
export class ViewEscalaPage implements OnInit {
  today = new Date()
  dataInicio!: Date;
  dataFim!: Date;
  escalas: NoiteDeApresentacaoDTO[] = [];
  filteredEscalas: NoiteDeApresentacaoDTO[] = [];
  idParam: number = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    private escalaService: noiteDeApresentacaoService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) { }


  ngOnInit() {
  }


  ionViewDidEnter() {
    this.escalaService.findAll().subscribe(
      (response) => {
        this.escalas = response;
        if (this.idParam > 0) {
          this.applyDateFilter();
        } else if (this.idParam < 0) {
          this.filterData();
        }
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

  applyDateFilter() {
    // Suponha que this.today seja um objeto Date
    const inicio = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
    const fim = new Date(this.today.getFullYear(), this.today.getMonth(), 31); // Suponha que você queira o último dia do mês

    this.filteredEscalas = this.escalas.filter((escala) => {
      console.log(escala.data)
      // const dataAtualEscala = new Date(escala.data[2], escala.data[1] - 1, escala.data[0]); // Converta o array em um objeto Date
      const dataAtualEscala = new Date(escala.data[0], escala.data[1] - 1, escala.data[2]); // Converta o array em um objeto Date
      console.log('at', dataAtualEscala.getDay())

      // console.log('in', inicio)
      // console.log('fi', fim)

      return dataAtualEscala >= inicio && dataAtualEscala <= fim;
    });
  }


  parseDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split('/').map((part) => +part);
    return new Date(year, month - 1, day); // Mês em JavaScript é base 0, subtrai 1.
  }
  getDiaDaSemana(data: Date): string {
    const diasDaSemana = ['DOM.', 'SEG.', 'TER.', 'QUA.', 'QUI.', 'SEX.', 'SAB.'];
    return diasDaSemana[data.getDay()];
  }

  filterData() {
    if (this.dataInicio && this.dataFim) {
      this.filteredEscalas = this.escalas.filter((escala) => {
        const dataEscala = new Date(escala.data[0], escala.data[1] - 1, escala.data[2]);
        //parseDate transforma o resoltuado pego em um objeto do tipo date mudando para Y/M/d
        const dataInicio = this.dataInicio;
        const dataFim = this.dataFim;

        return dataEscala >= dataInicio && dataEscala <= dataFim;
      });
    } else {
      // Se os campos de data estiverem vazios, liste todas as escalas
      this.filteredEscalas = this.escalas;
    }
  }
}
