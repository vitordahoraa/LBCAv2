import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment.development';

interface User{
  userId : string,
  name : string,
  email : string,

}

@Injectable({
  providedIn: 'root'
})  
export class UserService {
  apiURL = environment.API_REST_URL

  constructor(
    private _httpClient: HttpClient
  ) { }

  public googleAuth(token:string) {
    console.log(token)
    return this._httpClient.post(
      `${this.apiURL}/google/users`, 
      { 'token': token }, 
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );//.pipe(map((resp: any) => resp.json()));
  }

  
  public auth(req:any) {
    return this._httpClient.post(
      `${this.apiURL}/users`, 
      req, 
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );//.pipe(map((resp: any) => resp.json()));
  }

  public storeUser(user : any){
    const userModel = <User>{
      userId : String(user.userId),
      name : String(user.name),
      email : String(user.email)

    }
    sessionStorage.setItem('local_user',JSON.stringify(userModel))
  }
  
  public logOut(){
    sessionStorage.removeItem('local_user')
    console.log(sessionStorage.getItem('local_user'))

  }
  public logIn(userId:string) {
    return this._httpClient.get(
      `${this.apiURL}/users/${btoa(userId)}`
    );//.pipe(map((resp: any) => resp.json()));
  }
  
  public passwordMatch(pass : string, req : any) : boolean {
    return btoa(pass) == String(req.senha64)
  }
}