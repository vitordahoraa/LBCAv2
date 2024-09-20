import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HelpRequestService {
  apiURL = environment.API_REST_URL

  constructor(
    private _httpClient : HttpClient
  ) { }

  public createRequest(req : any){
    return this._httpClient.post(
      `${this.apiURL}/helprequest`, 
      req, 
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
  
  public getAllRequest(){
    return this._httpClient.get(
      `${this.apiURL}/helprequest`);
  }

  public getFilterRequest(titulo : string){
    return this._httpClient.get(
      `${this.apiURL}/helprequest/filter/titulo/${titulo}`
    );
  }

}
