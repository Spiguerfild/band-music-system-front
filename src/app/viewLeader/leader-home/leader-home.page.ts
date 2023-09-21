import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leader-home',
  templateUrl: './leader-home.page.html',
  styleUrls: ['./leader-home.page.scss'],
})
export class LeaderHomePage implements OnInit {

  constructor(private router: Router) { }


  toRegister() {
    this.router.navigate(['/register-general'])
  }
  toEdit() {
    this.router.navigate(['/edit-general'])
  }
  backPage() {
    this.router.navigate(['/'])
  }
  ngOnInit() {
  }

}
