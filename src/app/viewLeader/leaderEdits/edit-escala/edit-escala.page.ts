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

  escalas!: NoiteDeApresentacaoDTO[];
  bandas!: BandaDTO[];
  isModalOpen = false;
  selectedBandaIndex!: number;
  selectedBandaName: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private noiteDeApresentacaoService: noiteDeApresentacaoService,
    private bandaService: bandaService,
    private alertController: AlertController,
    private router: Router,
  ) { }
  /*Agrupa um formulário para estabelecer dominio e um conjunto de regras dentro desse dominio*/
  escalaForm!: FormGroup;
  /*array de possiveis erros */
  errorsMessage!: string[];
  setOpen(isOpen: boolean, i: number) {
    this.isModalOpen = isOpen;
    if (isOpen === true) {
      this.selectedBandaName = this.bandas[i].nome;
    }
  }

  submit(index: number) {

    if (this.escalaForm.invalid || this.escalaForm.pending) {
      return;
    }
    this.errorsMessage = []; // edfine o array de erros como vazio

    this.noiteDeApresentacaoService.update(index + 1, this.escalaForm.value)
      .subscribe(response => {
        this.presentAlert('Sucesso', 'Banda alterada',
          `De: oi 
          Para:${this.escalaForm.value}`,
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
