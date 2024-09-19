declare global {
  interface Window {
    onSignIn: (response: any) => void;
  }
}

import { Component, NgZone, OnInit } from '@angular/core';
import {FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common'
import { Router,RouterLink } from '@angular/router';
import { UserService } from '../../shared/services/user/user.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgOptimizedImage, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

  constructor(
    private _userService: UserService,
    private router: Router,
    private ngzone : NgZone
  ) { 

  }

  ngOnInit(): void {
    this.loadGoogleScript();
    /*google.accounts.id.initialize({
      client_id : '500886407759-nodeinr3ql0tu7864hef7rscfaf1hcof.apps.googleusercontent.com',
      callback : (resp : any) => {

      }
    })

    google.accounts.id.renderButton(document.getElementById('google-btn'))*/
    
}
  onSignIn(res : any){
    this._userService.auth(res.credential).subscribe(
      res => {
        this.ngzone.run( ()=>this.router.navigate(['/home'])) 
    },
      (err) => {
        window.alert('Erro ao logar via Google')
        console.log(err)
        return false;
  })
    
  }

   loadGoogleScript() {
     const script = document.createElement('script');
     script.src = 'https://accounts.google.com/gsi/client';
     script.async = true;
     script.defer = true;
     document.body.appendChild(script);
     window.onSignIn= this.onSignIn.bind(this);
   }
  applyForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    telefone : new FormControl(''),
    data_nascimento : new FormControl(''),
    senha : new FormControl(''),
  })

  submitUser() {
    //TODO
    console.log(this.applyForm.value.senha??'')
  }


}
