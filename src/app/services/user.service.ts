import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private httpClient: HttpClient) {}

  public añadirUsuario(user:any){
    const headers = new HttpHeaders({
      'Content-Type': 'text/json',
      'Accept': 'application/json; charset=utf8',
    });
    console.log(user);
    console.log(JSON.stringify(user));
    return this.httpClient.post(`${baseUrl}/usuarios/`,user);
  }
}
