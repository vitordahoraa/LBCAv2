import { Component, OnInit,NgZone } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss' 
})
export class NavbarComponent implements OnInit {

  constructor(
    private _userService : UserService,
    private ngzone : NgZone,
    private router : Router
  ){}

  CurrentUser() {
    return sessionStorage?.getItem('local_user')
  }

  
  currentUser : any

  ngOnInit(){
    const currentUser = JSON.parse(String(this.CurrentUser()))
    this.currentUserSession = currentUser
  }

  currentUserSession : any

  logOut(){
    this._userService.logOut()
    this.ngzone.run( ()=>this.router.navigate(['/home'])) 
  }
   
}
