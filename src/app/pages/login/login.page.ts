import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  senha: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  verificaLogin(position: 'top' | 'middle' | 'bottom') {
    if (this.usuario === 'admin' && this.senha === '123') {
      this.router.navigate(['/leader-home']);
    } else {
      this.exibirToast('Usuário ou senha incorretos.');
    }
  }

  async exibirToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  submit() {
    console.log('foi');
  }

  backPage(rota: string) {
    this.router.navigate([`/${rota}`]);
  }
}
