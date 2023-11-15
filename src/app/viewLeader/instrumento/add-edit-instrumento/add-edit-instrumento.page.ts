import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { instrumentoService } from 'src/app/services/domain/instrumento.service';

@Component({
  selector: 'app-add-edit-instrumento',
  templateUrl: './add-edit-instrumento.page.html',
  styleUrls: ['./add-edit-instrumento.page.scss'],
})
export class AddEditInstrumentoPage implements OnInit {
  instrumentoForm!: FormGroup;
  nomeBtn = '';
  cadOrAlt!: boolean;
  modoEdit = false;
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public instrumentoService: instrumentoService,
    private alertController: AlertController,
    private router: Router,

  ) { }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)

    if (id > 0) {
      this.nomeBtn = 'Alterar';
      this.cadOrAlt = true;
      this.modoEdit = true
      this.instrumentoService.findById(id).subscribe(response => {
        this.instrumentoForm = this.formBuilder.group({
          id: [response.id],
          nome: [response.nome, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
        })
      })
    } else {
      this.nomeBtn = 'Cadastrar';
      this.cadOrAlt = false;
      this.instrumentoForm = this.formBuilder.group({
        id,
        nome: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      })
    }
  }

  submit() {
    if (this.instrumentoForm.invalid || this.instrumentoForm.pending) {
      return;
    }

    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if (this.cadOrAlt) {
      this.instrumentoService.update(id, this.instrumentoForm.value)
        .subscribe(response => {
          this.presentAlert('Sucesso', 'Instrumento alterado',
            'Os dados foram alterados com sucesso', ['Ok',]);
        })
    } else {
      this.instrumentoService.insert(this.instrumentoForm.value)
        .subscribe(response => {
          this.presentAlert('Sucesso', 'Instrumento salvo',
            'Os dados foram salvos com sucesso', ['Ok',]);
        })
    }

  }

  async confirmDelete() {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Tem certeza que deseja deletar este instrumento?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            // Ação de cancelamento, não faz nada neste caso.
          }
        },
        {
          text: 'Deletar',
          handler: () => {
            // Executar ação de exclusão aqui.
            const id: number = Number(this.route.snapshot.paramMap.get('id'));
            this.instrumentoService.delete(id).subscribe(
              () => {
                // instrumento excluída com sucesso, você pode redirecionar para uma página diferente
                // ou realizar alguma ação específica após a exclusão.
                console.log('instrumento excluído com sucesso.');
                this.router.navigate(['/sel-instrumento']);
              },
              (error) => {
                // Tratar erros de exclusão aqui, exibindo uma mensagem de erro ou
                // realizando alguma outra ação adequada.
                console.error('Erro ao deletar instrumento:', error);
              }
            );
          }
        }
      ]
    });

    await alert.present();
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
    this.router.navigate(['sel-instrumento'])
  }

  backPage(rota: string) { // função que volta pra uma pagina especifica
    this.router.navigate([`/${rota}`])
  }

}
