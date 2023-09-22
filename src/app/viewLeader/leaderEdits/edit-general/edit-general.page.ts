import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-general',
  templateUrl: './edit-general.page.html',
  styleUrls: ['./edit-general.page.scss'],
})
export class EditGeneralPage implements OnInit {

  constructor(private router: Router) { }

  toBandas() {
    this.router.navigate(['/edit-banda'])
  }
  toMusicas() {
    this.router.navigate(['/edit-musica'])
  }
  toMusicos() {
    this.router.navigate(['/edit-musico'])
  }

  toInstrumentos() {
    this.router.navigate(['/edit-instrumento'])
  }
  ngOnInit() {
  }

  backPage(rota: string) { // função que volta pra uma pagina especifica
    this.router.navigate([`/${rota}`])
  }

}
