import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  constructor(private router: Router, private toastController: ToastController) {

  }


  verificaLogin(position: 'top' | 'middle' | 'bottom') {


    this.router.navigate(['/leader-home'])




  }

  submit() {
  }

  backPage() {
    this.router.navigate(['/'])
  }
  ngOnInit() {
  }

}
