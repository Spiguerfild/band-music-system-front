import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.page.html',
  styleUrls: ['./view-home.page.scss'],
})
export class ViewHomePage implements OnInit {

  constructor(private router: Router) { }
  toViewEscala(numero: number) {
    if (numero > 0) {
      this.router.navigate(['view-escala/1'])
    } else {
      this.router.navigate(['view-escala/-1'])
    }
  }
  backPage(rota: string) { // função que volta pra uma pagina especifica
    this.router.navigate([`/${rota}`])
  }
  ngOnInit() {
  }

}
