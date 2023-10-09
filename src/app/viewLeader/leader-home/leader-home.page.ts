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
    this.router.navigate(['/edit-escala'])
  }
  toBandas() {
    this.router.navigate(['/sel-banda'])
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
