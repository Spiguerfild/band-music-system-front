import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MusicaService } from 'src/app/services/domain/musica.service';

@Component({
  selector: 'app-add-edit-musica',
  templateUrl: './add-edit-musica.page.html',
  styleUrls: ['./add-edit-musica.page.scss'],
})
export class AddEditMusicaPage implements OnInit {

  musicaForm!: FormGroup;
  nomeBtn = '';
  cadOrAlt!: boolean;
  modoEdit = false;
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public musicaService: MusicaService,
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
      this.musicaService.findById(id).subscribe(response => {
        this.musicaForm = this.formBuilder.group({
          id: [response.id],
          nome: [response.nome, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
          autor: [response.autor, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
        })
      })
    } else {
      this.nomeBtn = 'Cadastrar';
      this.cadOrAlt = false;
      this.musicaForm = this.formBuilder.group({
        id,
        nome: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
        autor: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
      })
    }
  }

  submit() {
    if (this.musicaForm.invalid || this.musicaForm.pending) {
      return;
    }

    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if (this.cadOrAlt) {
      this.musicaService.update(id, this.musicaForm.value)
        .subscribe(response => {
          this.presentAlert('Sucesso', 'Musica alterada',
            'Os dados foram alterados com sucesso', ['Ok',]);
        })
    } else {
      this.musicaService.insert(this.musicaForm.value)
        .subscribe(response => {
          this.presentAlert('Sucesso', 'Musica salva',
            'Os dados foram salvos com sucesso', ['Ok',]);
        })
    }

  }

  async confirmDelete() {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Tem certeza que deseja deletar esta musica?',
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
            this.musicaService.delete(id).subscribe(
              () => {
                // Banda excluída com sucesso, você pode redirecionar para uma página diferente
                // ou realizar alguma ação específica após a exclusão.
                console.log('Musica excluída com sucesso.');
                this.router.navigate(['/sel-musica']);
              },
              (error) => {
                // Tratar erros de exclusão aqui, exibindo uma mensagem de erro ou
                // realizando alguma outra ação adequada.
                console.error('Erro ao deletar banda:', error);
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
    this.router.navigate(['sel-musica'])
  }

  backPage(rota: string) { // função que volta pra uma pagina especifica
    this.router.navigate([`/${rota}`])
  }

}
