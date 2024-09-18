declare global {
  interface Window {
    onSignIn: (response: any) => void;
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common'
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgOptimizedImage, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  ngOnInit(): void {
    this.loadGoogleScript();
    /*google.accounts.id.initialize({
      client_id : '500886407759-nodeinr3ql0tu7864hef7rscfaf1hcof.apps.googleusercontent.com',
      callback : (resp : any) => {

      }
    })

    google.accounts.id.renderButton(document.getElementById('google-btn'))*/
    
}
  onSignIn(){
    //TODO
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
    cpf : new FormControl(''),
    data_nascimento : new FormControl(''),
    senha : new FormControl(''),
  })

  submitUser() {
    //TODO
    console.log(this.applyForm.value.senha??'')
  }


}
