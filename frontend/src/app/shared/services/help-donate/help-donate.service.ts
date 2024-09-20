import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HelpDonateService {
  apiURL = environment.API_REST_URL

  constructor(
    private _httpClient : HttpClient
  ) { }

  public createDonation(req : any){
    return this._httpClient.post(
      `${this.apiURL}/helpdone`, 
      req, 
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

}
