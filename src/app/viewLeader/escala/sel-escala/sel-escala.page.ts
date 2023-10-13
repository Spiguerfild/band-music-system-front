import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NoiteDeApresentacaoDTO } from 'src/app/models/NoiteDeApresentacaoDTO';
import { noiteDeApresentacaoService } from 'src/app/services/domain/noiteDeApresentacao.service';

@Component({
  selector: 'app-sel-escala',
  templateUrl: './sel-escala.page.html',
  styleUrls: ['./sel-escala.page.scss'],
})
export class SelEscalaPage {
  dataInicio: string = ''; // Data de início
  dataFim: string = ''; // Data de fim
  escalas: NoiteDeApresentacaoDTO[] = [];
  filteredEscalas: NoiteDeApresentacaoDTO[] = [];

  constructor(private escalaService: noiteDeApresentacaoService, private router: Router) { }

  ionViewDidEnter() {
    this.escalaService.findAll().subscribe(
      (response) => {
        this.escalas = response;
        this.applyDateFilter();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  applyDateFilter() {
    if (this.dataInicio && this.dataFim) {
      this.filteredEscalas = this.escalas.filter((escala) => {
        const dataEscala = new Date(escala.data[0], escala.data[1] - 1, escala.data[2]);
        const dataInicio = this.parseDate(this.dataInicio);
        const dataFim = this.parseDate(this.dataFim);

        return dataEscala >= dataInicio && dataEscala <= dataFim;
      });
    } else {
      // Se os campos de data estiverem vazios, liste todas as escalas
      this.filteredEscalas = this.escalas;
    }
  }


  parseDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split('/').map((part) => +part);
    return new Date(year, month - 1, day); // Mês em JavaScript é base 0, subtrai 1.
  }

  toAddEditEscala(id: number) {
    this.router.navigate([`add-edit-escala/${id}`]);
  }

  backPage(rota: string) {
    this.router.navigate([`/${rota}`]);
  }
}
