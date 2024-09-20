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
    this._userService.googleAuth(res.credential).subscribe({
      next : res => {
        this._userService.storeUser(res)
        this.ngzone.run( ()=>this.router.navigate(['/home'])) 
    },
      error : err => {
          window.alert('Erro ao logar via Google')
          console.log(err)
          return false;
    }
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
    const name = this.applyForm.value.name
    const telefone = this.applyForm.value.telefone
    const email = this.applyForm.value.email
    const senha = this.applyForm.value.senha
    const data_nascimento = this.applyForm.value.data_nascimento

    if(name == ''){
      window.alert('Nome vazio')
    } else if(telefone == ''){
      window.alert('Telefone vazio')
    } else if(email == ''){
      window.alert('email vazio')
    } else if(data_nascimento == ''){
      window.alert('Data nascimento vazia')
    } else if(senha == ''){
      window.alert('Senha vazia')
    } 
    else{ 
      
      if(!/^(^[a-zA-Z0-9]{1,8}$)$/.test(String(senha)))
        window.alert('Senha não segue o padrão')
      else{
        const userForm = {
          userId : btoa(String(email)),
          name : name,
          telefone : telefone,
          email : email,
          data_nascimento : data_nascimento,
          senha : senha
        }
        this._userService.auth(userForm).subscribe({
          next : res => {
            this._userService.storeUser(res)
            this.ngzone.run( ()=>this.router.navigate(['/home'])) 
        },
        error : err => {
            window.alert('Erro ao logar')
            console.log(err)
            return false;
        }
      })

      }
    }
  }


}
