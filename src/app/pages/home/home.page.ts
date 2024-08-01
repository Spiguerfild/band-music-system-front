import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import packageJson from '../../../../package.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public version: string = packageJson.version;
  constructor(private router: Router) {}

  functionToLogin() {
    this.router.navigate(['/login']);
  }
  functionToViewHome() {
    this.router.navigate(['/view-home']);
  }

  ngOnInit() {}
}
