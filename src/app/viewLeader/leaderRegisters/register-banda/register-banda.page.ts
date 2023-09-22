import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { bandaService } from 'src/app/services/domain/banda.service';

@Component({
  selector: 'app-register-banda',
  templateUrl: './register-banda.page.html',
  styleUrls: ['./register-banda.page.scss'],
})
export class RegisterBandaPage implements OnInit {
  /*Agrupa um formulário para estabelecer dominio e um conjunto de regras dentro desse dominio*/
  bandaForm!: FormGroup;

  /*array de possiveis erros */
  errorsMessage!: string[];

  constructor(private formBuilder: FormBuilder,
    private alertController: AlertController,
    private bandaService: bandaService,
    private router: Router) { }


  submit() {
    if (this.bandaForm.invalid || this.bandaForm.pending) {
      return;
    }
    this.errorsMessage = []; // edfine o array de erros como vazio
    this.bandaService.insert(this.bandaForm.value)
      .subscribe(response => {
        this.presentAlert('Sucesso', 'Banda salva',
          'Os dados foram salvos com sucesso', ['Ok',]);
      })
  }

  ngOnInit() {
    this.bandaForm = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])]
    })
  }

  async presentAlert(header: string, subHeader: string,
    message: string, buttons: string[],) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons,
    });

    await alert.present();
    this.router.navigate(['/register-general'])
  }

  backPage(rota: string) {
    this.router.navigate([`/${rota}`])
  }
}
