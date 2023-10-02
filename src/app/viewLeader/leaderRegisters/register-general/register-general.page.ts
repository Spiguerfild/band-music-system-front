import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-general',
  templateUrl: './register-general.page.html',
  styleUrls: ['./register-general.page.scss'],
})
export class RegisterGeneralPage implements OnInit {

  constructor(private router: Router) { }
  toBandas() {
    this.router.navigate(['/register-banda'])
  }
  toEscalas() {
    this.router.navigate(['/register-escala'])
  }
  // toMusicas() {
  //   this.router.navigate(['/register-musica'])
  // }
  // toMusicos() {
  //   this.router.navigate(['/register-musico'])
  // }

  // toInstrumentos() {
  //   this.router.navigate(['/register-instrumento'])
  // }
  ngOnInit() {
  }

  backPage(rota: string) {
    this.router.navigate([`/${rota}`])
  }

}
