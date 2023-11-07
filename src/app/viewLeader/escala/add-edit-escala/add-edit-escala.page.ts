import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BandaDTO } from 'src/app/models/BandaDTO';
import { MusicaDTO } from 'src/app/models/MusicaDTO';
import { NoiteDeApresentacaoDTO } from 'src/app/models/NoiteDeApresentacaoDTO';
import { bandaService } from 'src/app/services/domain/banda.service';
import { MusicaDaNoiteService } from 'src/app/services/domain/musicaDaNoite.service';
import { noiteDeApresentacaoService } from 'src/app/services/domain/noiteDeApresentacao.service';

@Component({
  selector: 'app-add-edit-escala',
  templateUrl: './add-edit-escala.page.html',
  styleUrls: ['./add-edit-escala.page.scss'],
})
export class AddEditEscalaPage implements OnInit {
  bandas!: BandaDTO[];
  escalaForm!: FormGroup;
  nomeBtn = '';
  cadOrAlt!: boolean;
  modoEdit = false;
  obj!: BandaDTO;
  today = new Date();
  musicaSelected!: MusicaDTO;
  noiteSelected!: NoiteDeApresentacaoDTO;
  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public escalaService: noiteDeApresentacaoService,
    public musicaDaNoiteService: MusicaDaNoiteService,
    public bandaService: bandaService,
    private alertController: AlertController,
    private router: Router,

  ) { }

  ionViewDidEnter() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.bandaService.findById(id).subscribe(response => {
      this.bandaSelected = response; // daqui em diante continue
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

    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if (id > 0) {

      this.nomeBtn = 'Alterar';
      this.cadOrAlt = true;
      this.modoEdit = true
      this.escalaService.findById(id).subscribe(response => {
        this.obj = response.banda;
        this.escalaForm = this.formBuilder.group({
          id: [response.id],
          banda: [response.banda, Validators.compose([Validators.required])],
          data: [this.formatarData(response.data), Validators.required],
        });
      });

    } else {
      this.nomeBtn = 'Cadastrar';
      this.cadOrAlt = false;
      this.obj = {
        id: 0,
        nome: ''
      };// obj que faz o placeholder nao bugar

      const year = this.today.getFullYear();
      const month = (this.today.getMonth() + 1).toString().padStart(2, '0'); // Adiciona 1 e formata com zero à esquerda, se necessário
      const day = this.today.getDate().toString().padStart(2, '0'); // Formata com zero à esquerda, se necessário
      const defaultDate = `${year}-${month}-${day}`;

      this.escalaForm = this.formBuilder.group({
        id: [id],
        banda: ['', [Validators.required]], // Aqui, definimos a validação 'required' para o campo 'banda'
        data: [defaultDate, [Validators.required]],
      });

    }
  }

  submit() {
    if (this.escalaForm.invalid || this.escalaForm.pending) {
      return;
    }

    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if (this.cadOrAlt) {
      console.log(this.escalaForm.value)
      this.escalaService.update(id, this.escalaForm.value)
        .subscribe(response => {
          this.presentAlert('Sucesso', 'Escala alterada',
            'Os dados foram alterados com sucesso', ['Ok',]);
        })
    } else {
      this.escalaService.insert(this.escalaForm.value)
        .subscribe(response => {
          this.presentAlert('Sucesso', 'Escala salva',
            'Os dados foram salvos com sucesso', ['Ok',]);
        })
    }

  }

  async confirmDelete() {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Tem certeza que deseja deletar esta escala?',
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
            this.escalaService.delete(id).subscribe(
              () => {
                // Banda excluída com sucesso, você pode redirecionar para uma página diferente
                // ou realizar alguma ação específica após a exclusão.
                console.log('Banda excluída com sucesso.');
                this.router.navigate(['/leader-home']);
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
    this.router.navigate(['leader-home'])
  }

  backPage(rota: string) { // função que volta pra uma pagina especifica
    this.router.navigate([`/${rota}`])
  }
  formatarData(arrayData: number[]): string {
    // Extrai os elementos do array
    const [ano, mes, dia] = arrayData;

    // Formata o ano, mês e dia com zeros à esquerda, se necessário
    const anoFormatado = ano.toString();
    const mesFormatado = mes < 10 ? `0${mes}` : mes.toString();
    const diaFormatado = dia < 10 ? `0${dia}` : dia.toString();

    // Concatena os elementos formatados com "-" para formar a data
    const dataFormatada = `${anoFormatado}-${mesFormatado}-${diaFormatado}`;

    return dataFormatada;
  }


  colocarMusicoInstrumento() {
    if (this.musicaSelected === undefined) {
      return;
    }
    console.log(this.musicaSelected)
    this.musicaDaNoiteService.insert(this.musicaSelected.id, this.bandaSelected.id)
      .subscribe(response => {
        this.presentAlert('Sucesso', 'Escala alterada',
          'Musico e seu instrumento adicionados com sucesso', ['Ok',]);
      })
  }

  retirarMusicoInstrumento(index: number) {
    if (this.musicosInstrumentosBanda && this.musicosInstrumentosBanda[index]) {
      const musicoinstrumentoId = this.musicosInstrumentosBanda[index].id;
      const bandaId = this.bandaSelected.id;

      this.musicaDaNoiteService.delete(musicoinstrumentoId, bandaId)
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

}
