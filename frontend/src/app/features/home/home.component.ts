import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { HelpRequestService } from '../../shared/services/help-request/help-request.service';
import { ItemCardComponent } from '../../shared/components/item-card/item-card.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,RouterLink,ItemCardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  constructor(
    private helpRequest : HelpRequestService 
  ){}
  
  filter = ''
  cards : any

  CurrentUser() {
    return sessionStorage?.getItem('local_user')
  }

  ngOnInit(): void {
    this.getHelpinhos()
  }

  getHelpinhos() {
    if(this.filter==''){
      this.helpRequest.getAllRequest().subscribe(({
        next : (res) => {
          this.cards = res
          return true
        }
      }))
    } else {
      this.helpRequest.getFilterRequest(this.filter).subscribe(({
        next : (res) => {
          this.cards = res
          return true
        }
      }))
    }
  }

  onEnter(){
    this.getHelpinhos()
  }
 
}
