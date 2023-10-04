import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BandaDTO } from 'src/app/models/BandaDTO';
import { bandaService } from 'src/app/services/domain/banda.service';

@Component({
  selector: 'app-edit-banda',
  templateUrl: './edit-banda.page.html',
  styleUrls: ['./edit-banda.page.scss'],
})
export class EditBandaPage implements OnInit {

  bandas!: BandaDTO[];
  isModalOpen = false;

  /*Agrupa um formulário para estabelecer dominio e um conjunto de regras dentro desse dominio*/
  bandaForm!: FormGroup;

  /*array de possiveis erros */
  errorsMessage!: string[];

  // pega o elemento do form pelo id
  selectedBandaIndex!: number;
  constructor(private formBuilder: FormBuilder,
    private alertController: AlertController,
    private bandaService: bandaService,
    private router: Router) { }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  submit(index: number) {
    if (this.bandaForm.invalid || this.bandaForm.pending) {
      return;
    }
    let antigoNome = this.bandas[index].nome
    this.errorsMessage = []; // edfine o array de erros como vazio
    console.log(this.bandaForm.value);
    this.bandaService.update(index + 1, this.bandaForm.value)
      .subscribe(response => {
        this.presentAlert('Sucesso', 'Banda alterada',
          `Antigo nome: ${antigoNome} 
          Novo nome: ${this.bandaForm.value.nome}`,
          ['Ok']);
        this.router.navigate(['/edit-general']);
      })

    this.isModalOpen = false;
  }

  delete(index: number) {
    this.bandaService.delete(this.bandas[index].id)
      .subscribe(response => {
        this.presentAlert('Sucesso', 'Banda deletada',
          `Banda ${this.bandas[index].nome} deletada com sucesso: `,
          ['Ok']);
        this.router.navigate(['/edit-general']);
      })

    this.isModalOpen = false;
  }
  // FUÇÕES CICLO DE VIDA --------------------------------------------------------------------------------------
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
    this.bandaForm = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])]
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
