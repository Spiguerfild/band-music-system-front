import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BandaDTO } from 'src/app/models/BandaDTO';
import { NoiteDeApresentacaoDTO } from 'src/app/models/NoiteDeApresentacaoDTO';
import { bandaService } from 'src/app/services/domain/banda.service';
import { noiteDeApresentacaoService } from 'src/app/services/domain/noiteDeApresentacao.service';

@Component({
  selector: 'app-register-escala',
  templateUrl: './register-escala.page.html',
  styleUrls: ['./register-escala.page.scss'],
})
export class RegisterEscalaPage implements OnInit {

  bandas!: BandaDTO[];
  dataDeHoje!: string;

  isModalOpen = false;
  selectChange = false;
  dateChange = false;
  data = new Date();

  ano = this.data.getFullYear().toString().padStart(4, '0');
  mes = (this.data.getMonth() + 1).toString().padStart(2, '0');
  dia = this.data.getDate().toString().padStart(2, '0');

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




  // ionDateChange() {
  //   if (this.escalaForm.valid) {
  //     this.dateChange = true;
  //     console.log('VALID')
  //   } else {
  //     console.log('not valid')
  //   }
  // }
  //   ionSelectChange() { /*se o select mudar ele muda o botão para ativar a alteração*/
  //  this.selectChange

  //   }

  submit() {

    if (this.escalaForm.invalid || this.escalaForm.pending) {
      return;
    }

    this.errorsMessage = []; // edfine o array de erros como vazio
    console.log('escalaform-->', this.escalaForm.value)
    this.noiteDeApresentacaoService.insert(this.escalaForm.value)
      .subscribe(response => {
        this.presentAlert('Sucesso', 'Banda criada',
          `Banda: ${this.escalaForm.value.banda.nome} adicionada na escala com sucesso`,
          ['Ok']);
        this.router.navigate(['/register-general']);
      })

    this.isModalOpen = false;

  }
  //------------------------------------------------------------------------
  ionViewDidEnter() {


    this.bandaService.findAll()
      .subscribe(response => {
        this.bandas = response;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

  ngOnInit() {
    this.dataDeHoje = `${this.ano}-${this.mes}-${this.dia}`;
    // console.log(this.dataDeHoje)

    this.escalaForm = this.formBuilder.group({
      banda: ['', Validators.compose([Validators.required])],//aqui
      data: [this.dataDeHoje, Validators.compose([Validators.required])],
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
