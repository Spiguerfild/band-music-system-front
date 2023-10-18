import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leader-home',
  templateUrl: './leader-home.page.html',
  styleUrls: ['./leader-home.page.scss'],
})
export class LeaderHomePage implements OnInit {

  constructor(private router: Router) { }


  toEscalas() {
    this.router.navigate(['/sel-escala'])
  }
  toBandas() {
    this.router.navigate(['/sel-banda'])
  }
  toMusicas() {
    this.router.navigate(['/sel-musica'])
  }
  toMusicos() {
    this.router.navigate(['/sel-musico'])
  }

  toInstrumentos() {
    this.router.navigate(['/sel-instrumento'])
  }
  toMusicosInstrumentos() {
    this.router.navigate(['/sel-musico-instrumento'])
  }
  ngOnInit() {
  }

  backPage(rota: string) { // função que volta pra uma pagina especifica
    this.router.navigate([`/${rota}`])
  }
}
