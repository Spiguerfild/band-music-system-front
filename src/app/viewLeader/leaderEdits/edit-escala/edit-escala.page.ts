import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BandaDTO } from 'src/app/models/BandaDTO';
import { NoiteDeApresentacaoDTO } from 'src/app/models/NoiteDeApresentacaoDTO';
import { bandaService } from 'src/app/services/domain/banda.service';
import { noiteDeApresentacaoService } from 'src/app/services/domain/noiteDeApresentacao.service';

@Component({
  selector: 'app-edit-escala',
  templateUrl: './edit-escala.page.html',
  styleUrls: ['./edit-escala.page.scss'],
})
export class EditEscalaPage implements OnInit {
  noites!: NoiteDeApresentacaoDTO[]; // array de todas as escalas
  bandas!: BandaDTO[]; // array de todas as bandas
  noiteId!: number; // variável para pegar o ID da noite de apresentação (escala selecionada)
  selectedBandaDTO!: BandaDTO; // objeto da banda selecionada
  isModalOpen = false; // variável de controle do modal
  selectChange = false; // variável de controle do select


  constructor(
    private formBuilder: FormBuilder,
    private noiteDeApresentacaoService: noiteDeApresentacaoService,
    private bandaService: bandaService,
    private alertController: AlertController,
    private router: Router
  ) { }

  escalaForm!: FormGroup;
  errorsMessage!: string[];

  ngOnInit() {
    this.escalaForm = this.formBuilder.group({
      // banda: ['', Validators.compose([Validators.required])],
      banda: [Validators.compose([Validators.required])],
      data: [Validators.compose([Validators.required])],
    });
  }



  setOpen(isOpen: boolean, id: number) {
    this.isModalOpen = isOpen;

    if (isOpen === true) {
      this.noiteId = id;
      this.selectedBandaDTO = this.noites[this.noiteId - 1].banda;

      this.noiteDeApresentacaoService.findById(id).subscribe(response => {

        console.log('response data', response.data)

        this.escalaForm = this.formBuilder.group({
          id: [response.id, Validators.required],
          // banda: [response.banda, Validators.required],
          banda: [this.bandas[this.selectedBandaDTO.id - 1], Validators.required],
          data: [this.formatarData(response.data), Validators.required],
        });

        this.selectChange = false;
      });
    }
  }


  ionDateChange() {
    this.selectChange = true;
  }


  ionSelectChange(e: any) {
    this.selectChange = true;
    console.log('antes=', this.selectedBandaDTO)
    this.selectedBandaDTO = e.detail.value
    console.log('depois=', this.selectedBandaDTO)


  }


  submit(noiteId: number) {
    if (this.escalaForm.invalid || this.escalaForm.pending) {
      return;
    }

    this.errorsMessage = [];

    console.log('Escala form----value------->', this.escalaForm.value)
    this.noiteDeApresentacaoService.update(noiteId, this.escalaForm.value)
      .subscribe(response => {
        this.presentAlert('Sucesso', 'Escala alterada',
          `Escala alterada com sucesso`,
          ['Ok']);
        this.router.navigate(['/edit-general']);
      });
    this.isModalOpen = false;
  }


  ionViewDidEnter() {
    this.noiteDeApresentacaoService.findAll()
      .subscribe(response => {
        this.noites = response;
      }, error => {
        console.log(error);
      });

    this.bandaService.findAll()
      .subscribe(response => {
        this.bandas = response;
      }, error => {
        console.log(error);
      });
  }


  async presentAlert(header: string, subHeader: string,
    message: string, buttons: string[]) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons,
    });
    await alert.present();
  }


  formatarData(arrayData: number[]): string {
    // Extrai os elementos do array
    const [ano, mes, dia] = arrayData;

    // Formata o ano, mês e dia com zeros à esquerda, se necessário
    const anoFormatado = ano.toString();
    const mesFormatado = mes < 10 ? `0${mes}` : mes.toString();
    const diaFormatado = dia < 10 ? `0${dia}` : dia.toString();

    // Concatena os elementos formatados com "-" para formar a data
    const dataFormatada = `${anoFormatado}-${mesFormatado}-${diaFormatado}`;

    return dataFormatada;
  }



  backPage(rota: string) { // função que volta pra uma pagina especifica
    this.router.navigate([`/${rota}`])
  }


}
