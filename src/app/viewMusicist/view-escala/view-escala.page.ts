import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MusicaDTO } from 'src/app/models/MusicaDTO';
import { MusicoInstrumentoDTO } from 'src/app/models/MusicoInstrumentoDTO';
import { NoiteDeApresentacaoDTO } from 'src/app/models/NoiteDeApresentacaoDTO';
import { MusicosInstrumentosBandaDTO } from 'src/app/models/musicosInstrumentosBandaDTO';
import { MusicaDaNoiteService } from 'src/app/services/domain/musicaDaNoite.service';
import { musicoInstrumentoService } from 'src/app/services/domain/musicoInstrumento.service';
import { MusicosInstrumentosBandaService } from 'src/app/services/domain/musicosInstrumentosBanda.service';
import { noiteDeApresentacaoService } from 'src/app/services/domain/noiteDeApresentacao.service';

@Component({
  selector: 'app-view-escala',
  templateUrl: './view-escala.page.html',
  styleUrls: ['./view-escala.page.scss'],
  providers: [DatePipe],
})
export class ViewEscalaPage implements OnInit {


  today = new Date()
  dataInicio!: string;
  dataFim!: string;
  escalas: NoiteDeApresentacaoDTO[] = [];
  filteredEscalas: NoiteDeApresentacaoDTO[] = [];
  idParam: number = Number(this.route.snapshot.paramMap.get('id'));
  isModalOpen = false; // Variável para controlar o estado do modal
  selectedEscala!: NoiteDeApresentacaoDTO;
  musicosInstrumentos!: MusicosInstrumentosBandaDTO[];
  musicas!: MusicaDTO[];
  constructor(
    private escalaService: noiteDeApresentacaoService,
    private router: Router,
    private route: ActivatedRoute,
    private musicoInstrumentoBandaService: MusicosInstrumentosBandaService,
    private musicasDaNoiteService: MusicaDaNoiteService,
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
      const dataInicioObj = this.parseDate(this.dataInicio);
      const dataFimObj = this.parseDate(this.dataFim);

      this.filteredEscalas = this.escalas.filter((escala) => {
        const dataEscala = new Date(escala.data[0], escala.data[1] - 1, escala.data[2]);
        console.log(dataInicioObj, '---', dataFimObj, 'aaa', dataEscala)
        return dataEscala >= dataInicioObj && dataEscala <= dataFimObj;
      });
    } else {
      // Se os campos de data estiverem vazios, liste todas as escalas
      this.filteredEscalas = this.escalas;
    }
  }




  backPage(rota: string) { // função que volta pra uma pagina especifica
    this.router.navigate([`/${rota}`])
  }

  abrirModal(escala: NoiteDeApresentacaoDTO) {
    this.musicoInstrumentoBandaService.findAll(escala.banda.id)
      .subscribe(response => {
        this.musicosInstrumentos = response;
        console.log(response);
      }, error => {
        console.log(error);
      });

    this.musicasDaNoiteService.findAll(escala.id)
      .subscribe(response => {
        this.musicas = response;
        console.log(response);
      }, error => {
        console.log(error);
      });

    this.selectedEscala = escala;
    console.log('escalinha->', escala)
    this.isModalOpen = true;
  }

  fecharModal() {
    this.isModalOpen = false;
  }

}
