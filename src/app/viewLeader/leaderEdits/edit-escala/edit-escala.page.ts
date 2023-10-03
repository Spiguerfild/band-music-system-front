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

  noites!: NoiteDeApresentacaoDTO[]; // array de todas as escalas
  bandas!: BandaDTO[]; // array de todas as bandas
  noiteId!: number; // variavel para pegar o id da noite de apresentação (escala selecionada)
  // selectedBandaId: number | null = null; // id da banda selecionada
  selectedBandaDTO!: BandaDTO; // objeto da banda selecionada
  isModalOpen = false; // variavel de controle do modal
  selectChange = false; // variavel de controle do select
  dateValue!: string; // valor da data 

  constructor(
    private formBuilder: FormBuilder,
    private noiteDeApresentacaoService: noiteDeApresentacaoService,
    private bandaService: bandaService,
    private alertController: AlertController,
    private router: Router,
    // private route: ActivatedRoute
  ) { }

  /*Agrupa um formulário para estabelecer dominio e um conjunto de regras dentro desse dominio*/
  escalaForm!: FormGroup;

  /*array de possiveis erros */
  errorsMessage!: string[];

  /*Para acertar o id da banda coloque index +1 */
  setOpen(isOpen: boolean, id: number) {
    this.isModalOpen = isOpen;
    if (isOpen === true) {
      this.noiteId = id // pega a noite especifica
      console.log('noite ID-->', this.noiteId)
      this.selectedBandaDTO = this.noites[this.noiteId - 1].banda;

      // console.log('papapappaa', this.noites[this.noiteId].banda.id - 1)
      console.log('valorinterno', this.bandas[this.selectedBandaDTO.id - 1])
      this.noiteDeApresentacaoService.findById(id).subscribe(response => {
        this.escalaForm = this.formBuilder.group({
          id: [response.id, Validators.required],
          banda: [response.banda, Validators.required],
          // data: [response.data, Validators.required],
        })
        console.log('resps==', response)


      })

      this.selectChange = false;
    }
  }

  ionDateChange() {
    this.selectChange = true;
  }
  ionSelectChange() { /*se o select mudar ele muda o botão para ativar a alteração*/
    this.selectChange = true;
  }

  submit(noiteId: number) {

    if (this.escalaForm.invalid || this.escalaForm.pending) {
      return;
    }

    this.errorsMessage = []; // edfine o array de erros como vazio
    console.log('escalaform-->', this.escalaForm.value)
    this.noiteDeApresentacaoService.update(noiteId, this.escalaForm.value)
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
        this.noites = response;
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
      banda: ['', Validators.compose([Validators.required])],
      // data: ['', Validators.compose([Validators.required])],
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
