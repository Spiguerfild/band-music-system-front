import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private associadoService: bandaService) { }


  submit() {
    this.errorsMessage = []; // edfine o array de erros como vazio

  }

  ngOnInit() {
    this.bandaForm = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(20)])]
    })
  }

}
