import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nome: string = '';
  senha: string = '';

  constructor(router: Router) { }

  verificaLogin() {
    if (this.nome === 'pastor' && this.senha === '123') {

    }
  }

  onSubmit() {
  }
  ngOnInit() {
  }

}
