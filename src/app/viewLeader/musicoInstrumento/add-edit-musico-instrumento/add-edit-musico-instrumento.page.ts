import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { InstrumentoDTO } from 'src/app/models/InstrumentoDTO';
import { MusicoDTO } from 'src/app/models/MusicoDTO';
import { instrumentoService } from 'src/app/services/domain/instrumento.service';
import { MusicoService } from 'src/app/services/domain/musico.service';
import { musicoInstrumentoService } from 'src/app/services/domain/musicoInstrumento.service';




@Component({
  selector: 'app-add-edit-musico-instrumento',
  templateUrl: './add-edit-musico-instrumento.page.html',
  styleUrls: ['./add-edit-musico-instrumento.page.scss'],
})
export class AddEditMusicoInstrumentoPage implements OnInit {
  musicos!: MusicoDTO[];
  instrumentos!: InstrumentoDTO[];
  musicoInstrumentoForm!: FormGroup;
  nomeBtn = '';
  cadOrAlt!: boolean;
  modoEdit = false;
  musicoNome: string = '';
  instrumentoNome: string = '';
  isModalOpen = false;
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public musicoInstrumentoService: musicoInstrumentoService,
    public musicoService: MusicoService,
    public instrumentoService: instrumentoService,
    private alertController: AlertController,
    private router: Router,
    private modalController: ModalController,
  ) { }

  ionViewDidEnter() {
    this.musicoService.findAll()
      .subscribe(response => {
        this.musicos = response;
        console.log(response);
      }, error => {
        console.log(error);
      });

    this.instrumentoService.findAll()
      .subscribe(response => {
        this.instrumentos = response;
        console.log(response);
      }, error => {
        console.log(error);
      });


  }


  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)

    if (id > 0) {
      this.nomeBtn = 'Alterar';
      this.cadOrAlt = true;
      this.modoEdit = true
      this.musicoInstrumentoService.findById(id).subscribe(response => {
        this.musicoNome = response.musico.nome
        this.instrumentoNome = response.instrumento.nome
        this.musicoInstrumentoForm = this.formBuilder.group({
          id: [response.id],
          musico: [response.musico, Validators.required],
          instrumento: [response.instrumento, Validators.required],
        })
      })
    } else {
      this.nomeBtn = 'Cadastrar';
      this.cadOrAlt = false;
      this.musicoInstrumentoForm = this.formBuilder.group({
        // id: [id],
        musico: ['', [Validators.required]],
        instrumento: ['', [Validators.required]],
      })
    }
  }

  submit() {
    if (this.musicoInstrumentoForm.invalid || this.musicoInstrumentoForm.pending) {
      return;
    }

    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if (this.cadOrAlt) { //se for pra ALTERAR
      this.musicoInstrumentoService.update(id, this.musicoInstrumentoForm.value)
        .subscribe(
          response => {
            this.presentAlert('Sucesso', 'Musica alterada',
              'Os dados foram alterados com sucesso', ['Ok',]);
          },
          error => {

            this.setOpen(true);

          }

        )


    } else {//se for pra CADASTRAR
      console.log('sub cad --->', this.musicoInstrumentoForm.value)
      this.musicoInstrumentoService.insert(this.musicoInstrumentoForm.value)
        .subscribe(response => {
          this.presentAlert('Sucesso', 'Musica salva',
            'Os dados foram salvos com sucesso', ['Ok',]);
        },
          error => {

            this.setOpen(true);

          }

        )
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
            this.musicoInstrumentoService.delete(id).subscribe(
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
    this.router.navigate(['sel-musico-instrumento'])
  }



  backPage(rota: string) {
    if (this.isModalOpen) {
      this.modalController.dismiss(); // Fecha o modal antes de navegar para outra página
    }
    this.router.navigate([`/${rota}`]);
  }

  // modal

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    if (!isOpen) {
      this.modalController.dismiss(); // Fecha o modal quando isOpen for definido como falso
    }
  }
}
