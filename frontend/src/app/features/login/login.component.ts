import { Component, NgZone } from '@angular/core';
import {FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../shared/services/user/user.service';
import { Router,RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private _userService: UserService,
    private ngzone : NgZone,
    private router : Router
  ){}
  ngOnInit(): void {
    this.loadGoogleScript();
    
}

  applyForm = new FormGroup({
    email : new FormControl(''),
    senha : new FormControl(''),
  })

  
  logIn() {
    //TODO
    const email = this.applyForm.value.email
    const senha = this.applyForm.value.senha

    if(email == ''){
      window.alert('email vazio')
    } else if(senha == ''){
      window.alert('Senha vazia')
    } 
    else{ 
      
        this._userService.logIn(String(email)).subscribe({
          next : res => {
            const isMatch = this._userService.passwordMatch(String(senha),res)
            if(isMatch){
              this._userService.storeUser(res)
              this.ngzone.run( ()=>this.router.navigate(['/home'])) 

            } else {
              window.alert('Senha incorreta')
            }
        },
        error : err => {
            window.alert('Erro ao logar')
            console.log(err)
            return false;
        }
      })

    }
  }
  
  
  loadGoogleScript() {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    window.onSignIn= this.onSignIn.bind(this);
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

}
