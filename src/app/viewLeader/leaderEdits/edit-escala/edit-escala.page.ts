import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  escalas!: NoiteDeApresentacaoDTO[];
  bandas!: BandaDTO[];
  selectedBandaIndex!: number;
  selectedBandaDTO!: BandaDTO;
  newNoiteDTO!: NoiteDeApresentacaoDTO;
  isModalOpen = false;
  selectChange = false;
  constructor(
    private formBuilder: FormBuilder,
    private noiteDeApresentacaoService: noiteDeApresentacaoService,
    private bandaService: bandaService,
    private alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  /*Agrupa um formulário para estabelecer dominio e um conjunto de regras dentro desse dominio*/
  escalaForm!: FormGroup;

  /*array de possiveis erros */
  errorsMessage!: string[];

  /*Para acertar o id da banda coloque index +1 */
  setOpen(isOpen: boolean, i: number) {
    this.isModalOpen = isOpen;
    if (isOpen === true) {
      this.selectedBandaDTO = this.bandas[i];
      console.log('index ---->', i, 'banda--->', this.bandas[i])
    }
  }
  ionSelectChange() { /*se o select mudar ele muda o botão para ativar a alteração*/
    this.selectChange = true;
  }

  submit(index: number) {

    // if (this.escalaForm.invalid || this.escalaForm.pending) {
    //   return;
    // }

    this.errorsMessage = []; // edfine o array de erros como vazio
    console.log(this.escalaForm.value)
    this.noiteDeApresentacaoService.update(index + 1, this.escalaForm.value)
      .subscribe(response => {
        this.presentAlert('Sucesso', 'Banda alterada',
          `De:  ${this.selectedBandaDTO.nome}
          Para:${this.escalaForm.value.banda.nome}`,
          ['Ok']);
        this.router.navigate(['/edit-general']);
      })

    this.isModalOpen = false;
  }
  //------------------------------------------------------------------------
  ionViewDidEnter() {
    this.noiteDeApresentacaoService.findAll()
      .subscribe(response => {
        this.escalas = response;
        console.log(response);
      }, error => {
        console.log(error);
      });

    this.bandaService.findAll()
      .subscribe(response => {
        this.bandas = response;
        console.log(response);
      }, error => {
        console.log(error);
      });

  }

  ngOnInit() {

    this.escalaForm = this.formBuilder.group({
      banda: [Validators.compose([Validators.required])],


      // data: [Validators.compose([Validators.required])],
    })
  }
  //--------------------------------------------------------------------------------------
  async presentAlert(header: string, subHeader: string,
    message: string, buttons: string[],) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons,
    });
    await alert.present();
  }
}
