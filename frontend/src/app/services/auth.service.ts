import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

export interface UserCredentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: UserCredentials) {
    return this.http.post<any>('/api/auth/register', data).pipe(
      tap((response: any) => console.log(response))
    )
  }

  login(data: UserCredentials) {
    return this.http.post<any>('/api/auth/login', data).pipe(
      tap((response) => {
        if (response.token) {
          localStorage.setItem('id_token', response.token);
        }
      })
    )
  }
}
