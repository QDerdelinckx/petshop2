import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  get isConnected(): boolean {
    return localStorage.getItem('TOKEN') != null;
  }
  constructor(
    private sidebarService: NbSidebarService,
    private router: Router
  ) {}

  toggle() {
    this.sidebarService.toggle(true);
  }

  login() {
    this.router.navigateByUrl('/security');
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/security');
  }
}