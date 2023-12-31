import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BandaDTO } from 'src/app/models/BandaDTO';
import { MusicosInstrumentosBandaDTO } from 'src/app/models/musicosInstrumentosBandaDTO';
import { MusicoInstrumentoDTO } from 'src/app/models/MusicoInstrumentoDTO';
import { bandaService } from 'src/app/services/domain/banda.service';
import { musicoInstrumentoService } from 'src/app/services/domain/musicoInstrumento.service';
import { MusicosInstrumentosBandaService } from 'src/app/services/domain/musicosInstrumentosBanda.service';

@Component({
  selector: 'app-add-edit-banda',
  templateUrl: './add-edit-banda.page.html',
  styleUrls: ['./add-edit-banda.page.scss'],
})
export class AddEditBandaPage implements OnInit {

  bandaForm!: FormGroup; // form de dados da banda
  musicoInstrumentoForm!: FormGroup;
  nomeBtn = ''; // variavel de nome do botão CADASTRAR | ALTERAR
  cadOrAlt!: boolean; // variavel de controle do botão
  modoEdit = false; // variável que torna ou não necessário o botão exlcuir 
  musicosInstrumentosBanda!: MusicosInstrumentosBandaDTO[];
  musicosInstrumentos!: MusicoInstrumentoDTO[];
  bandaSelected!: BandaDTO;
  musicoinstrumentoSelected!: MusicoInstrumentoDTO;
  nomeBandaAlterado: boolean = false; // Variável para rastrear se o nome da banda foi alterado
  originalNomeBanda: string = '';
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public bandaService: bandaService,
    public musicosInstrumentosService: musicoInstrumentoService,
    public musicosInstrumentosBandaService: MusicosInstrumentosBandaService,
    private alertController: AlertController,
    private router: Router,
  ) { }

  ionViewDidEnter() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.bandaService.findById(id).subscribe(response => {
      this.bandaSelected = response;
    });

    // Check if bandaSelected is defined before making the API call

    this.musicosInstrumentosBandaService.findAll(id)
      .subscribe(response => {
        this.musicosInstrumentosBanda = response;
      }, error => {
        console.log('errozin', error);
      });

    this.musicosInstrumentosService.findAll()
      .subscribe(response => {
        this.musicosInstrumentos = response;
      }, error => {
        console.log('errozin', error);
      });
  }

  // ao iniciar verifica se o id que veio é de um obj já existente ou se vamos criar um do zero.
  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);

    if (id > 0) {
      this.nomeBtn = 'Alterar';
      this.cadOrAlt = true;
      this.modoEdit = true;
      this.bandaService.findById(id).subscribe(response => {
        this.bandaSelected = response;
        this.originalNomeBanda = response.nome; // Armazene o valor original
        this.bandaForm = this.formBuilder.group({
          id: [response.id],
          nome: [response.nome, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])],
        });
      });
    } else {
      this.nomeBtn = 'Cadastrar';
      this.cadOrAlt = false;
      this.originalNomeBanda = ''; // Inicialize o valor original como vazio para um novo cadastro
      this.bandaForm = this.formBuilder.group({
        id,
        nome: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])],
      });
    }

    // Restante do código...
  }



  submit() {
    if (this.bandaForm.invalid || this.bandaForm.pending) {
      return;
    }

    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if (this.cadOrAlt) {
      this.bandaService.update(id, this.bandaForm.value)
        .subscribe(response => {
          this.presentAlert('Sucesso', 'Banda alterada',
            'Os dados foram alterados com sucesso', ['Ok',]);
        })

    } else {
      this.bandaService.insert(this.bandaForm.value)
        .subscribe(response => {
          this.presentAlert('Sucesso', 'Banda salva',
            'Os dados foram salvos com sucesso', ['Ok',]);
        })
    }

  }

  onNomeChange(event: any) {
    const newNome = event.detail.value;
    // Compare o novo nome com o valor original do nome da banda
    const isNomeChanged = newNome !== this.originalNomeBanda;
    // Atualize o estado do botão de envio com base na comparação
    this.nomeBandaAlterado = isNomeChanged;
  }


  async confirmDelete() {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Tem certeza que deseja deletar esta banda?',
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
            this.bandaService.delete(id).subscribe(
              () => {
                // Banda excluída com sucesso, você pode redirecionar para uma página diferente
                // ou realizar alguma ação específica após a exclusão.
                console.log('Banda excluída com sucesso.');
                this.router.navigate(['/sel-banda']);
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
    this.router.navigate(['sel-banda'])
  }

  colocarMusicoInstrumento() {
    if (this.musicoinstrumentoSelected === undefined) {
      return;
    }
    console.log(this.musicoinstrumentoSelected)
    this.musicosInstrumentosBandaService.insert(this.musicoinstrumentoSelected.id, this.bandaSelected.id)
      .subscribe(response => {
        this.presentAlert('Sucesso', 'Banda alterada',
          'Musico e seu instrumento adicionados com sucesso', ['Ok',]);
      })
  }

  retirarMusicoInstrumento(index: number) {
    if (this.musicosInstrumentosBanda && this.musicosInstrumentosBanda[index]) {
      const musicoinstrumentoId = this.musicosInstrumentosBanda[index].id;
      const bandaId = this.bandaSelected.id;

      this.musicosInstrumentosBandaService.delete(musicoinstrumentoId, bandaId)
        .subscribe(response => {
          this.presentAlert('Sucesso', 'Músico e instrumento removidos',
            'Músico e seu instrumento foram removidos com sucesso da banda', ['Ok']);
          this.musicosInstrumentosBanda.splice(index, 1); // Remove o item da lista local após a remoção bem-sucedida.
        }, error => {
          console.error('Erro ao remover músico e seu instrumento:', error);
        });
    }
  }


  atribuirValorSelecionado(event: any) {
    this.musicoinstrumentoSelected = event.detail.value;
  }

  backPage(rota: string) { // função que volta pra uma pagina especifica
    this.router.navigate([`/${rota}`])
  }
}
