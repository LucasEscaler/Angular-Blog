import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(
      'https://paiblog.herokuapp.com/usuarios/logar',
      userLogin
    );
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>(
      'https://paiblog.herokuapp.com/usuarios/cadastrar',
      user
    );
  }

  geByIdUser(id: number): Observable<User> {
    return this.http.get<User>(
      `https://paiblog.herokuapp.com/usuarios/${id}`
    );
  }

  logado() {
    let ok = false;

    if (environment.token != '') {
      ok = true;
    }

    return ok;
  }

  adm() {
    let ok = false;

    if (environment.tipo == 'adm') {
      ok = true;
    }

    return ok;
  }
}
