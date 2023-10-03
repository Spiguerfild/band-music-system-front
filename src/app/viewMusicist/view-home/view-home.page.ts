import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.page.html',
  styleUrls: ['./view-home.page.scss'],
})
export class ViewHomePage implements OnInit {

  constructor(private router: Router) { }
  realizarAcao() {

  }
  backPage(rota: string) { // função que volta pra uma pagina especifica
    this.router.navigate([`/${rota}`])
  }
  ngOnInit() {
  }

}
