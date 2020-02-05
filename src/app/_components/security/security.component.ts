import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/_services/security.service';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private secService: SecurityService,
    private router: Router,
    private dialogService: NbDialogService    
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, Validators.compose([
        Validators.email,
        Validators.required,
        Validators.maxLength(255)
      ])),
      'password': new FormControl(null, Validators.compose([
        Validators.required,
        Validators.maxLength(255)
      ])),
    })
  }

  login() {
    //envoyer les datas à l'api
    let json = this.loginForm.value;
    this.secService.login(json).subscribe(
      (token) => { 
        localStorage.setItem('TOKEN', token);
        this.router.navigateByUrl('/home');
      },
      (error) => {
        console.log(error);
      },
      () => {
      }
    );
  }

}
