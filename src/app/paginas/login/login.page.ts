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

  constructor(private router: Router) { }

  verificaLogin() {
    if (this.nome === '' && this.senha === '') {
      this.router.navigate(['/leader-home'])

    }
  }

  onSubmit() {
  }

  backPage() {
    this.router.navigate(['/'])
  }
  ngOnInit() {
  }

}
