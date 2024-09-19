import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})  
export class UserService {
  apiURL = environment.API_REST_URL

  constructor(
    private _httpClient: HttpClient
  ) { }

  public auth(token:string) {
    console.log(token)
    return this._httpClient.post(
      `${this.apiURL}/google/users`, 
      { 'token': token }, 
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );//.pipe(map((resp: any) => resp.json()));
  }
  

}