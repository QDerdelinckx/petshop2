import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../_models/loginModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(model: LoginModel): Observable<string> {
    return this.httpClient.post<string>(
      environment.apiEndPoint + '/security/login', 
      model
    );
  }

  logout() {}
  register() {}
}
