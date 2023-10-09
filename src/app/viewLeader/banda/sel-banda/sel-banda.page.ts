import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BandaDTO } from 'src/app/models/BandaDTO';
import { bandaService } from 'src/app/services/domain/banda.service';

@Component({
  selector: 'app-sel-banda',
  templateUrl: './sel-banda.page.html',
  styleUrls: ['./sel-banda.page.scss'],
})
export class SelBandaPage implements OnInit {
  bandas!: BandaDTO[];
  constructor(private bandaService: bandaService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.bandaService.findAll()
      .subscribe(response => {
        this.bandas = response;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

  toAddEditBanda(id: number) {
    this.router.navigate([`add-edit-banda/${id}`])
  }
  backPage(rota: string) { // função que volta pra uma pagina especifica
    this.router.navigate([`/${rota}`])
  }
}
