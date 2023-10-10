import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicoDTO } from 'src/app/models/MusicoDTO';
import { MusicoService } from 'src/app/services/domain/musico.service';

@Component({
  selector: 'app-sel-musico',
  templateUrl: './sel-musico.page.html',
  styleUrls: ['./sel-musico.page.scss'],
})
export class SelMusicoPage implements OnInit {
  musicos!: MusicoDTO[];
  constructor(private musicoService: MusicoService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.musicoService.findAll()
      .subscribe(response => {
        this.musicos = response;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

  toAddEditMusico(id: number) {
    this.router.navigate([`add-edit-musico/${id}`])
  }
  backPage(rota: string) { // função que volta pra uma pagina especifica
    this.router.navigate([`/${rota}`])
  }

}
