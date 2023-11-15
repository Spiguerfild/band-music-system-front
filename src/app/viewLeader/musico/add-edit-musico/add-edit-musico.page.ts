import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MusicoService } from 'src/app/services/domain/musico.service';

@Component({
  selector: 'app-add-edit-musico',
  templateUrl: './add-edit-musico.page.html',
  styleUrls: ['./add-edit-musico.page.scss'],
})
export class AddEditMusicoPage implements OnInit {
  musicoForm!: FormGroup;
  nomeBtn = '';
  cadOrAlt!: boolean;
  modoEdit = false;
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public musicoService: MusicoService,
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
      this.musicoService.findById(id).subscribe(response => {
        this.musicoForm = this.formBuilder.group({
          id: [response.id],
          nome: [response.nome, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])],
        })
      })
    } else {
      this.nomeBtn = 'Cadastrar';
      this.cadOrAlt = false;
      this.musicoForm = this.formBuilder.group({
        id,
        nome: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])],
      })
    }
  }

  submit() {
    if (this.musicoForm.invalid || this.musicoForm.pending) {
      return;
    }

    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if (this.cadOrAlt) {
      this.musicoService.update(id, this.musicoForm.value)
        .subscribe(response => {
          this.presentAlert('Sucesso', 'Musico alterado',
            'Os dados foram alterados com sucesso', ['Ok',]);
        })
    } else {
      this.musicoService.insert(this.musicoForm.value)
        .subscribe(response => {
          this.presentAlert('Sucesso', 'Musico salvo',
            'Os dados foram salvos com sucesso', ['Ok',]);
        })
    }

  }

  async confirmDelete() {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Tem certeza que deseja deletar este Musico?',
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
            this.musicoService.delete(id).subscribe(
              () => {
                // musico excluída com sucesso, você pode redirecionar para uma página diferente
                // ou realizar alguma ação específica após a exclusão.
                console.log('musico excluída com sucesso.');
                this.router.navigate(['/sel-musico']);
              },
              (error) => {
                // Tratar erros de exclusão aqui, exibindo uma mensagem de erro ou
                // realizando alguma outra ação adequada.
                console.error('Erro ao deletar musico:', error);
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
    this.router.navigate(['sel-musico'])
  }

  backPage(rota: string) { // função que volta pra uma pagina especifica
    this.router.navigate([`/${rota}`])
  }
}
