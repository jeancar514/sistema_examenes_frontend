import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private httpClient: HttpClient) {}

  public añadirUsuario(user:any){
    return this.httpClient.post(`${baseUrl}/usuarios/`,user)
  }
}
