import { Component, Input, OnInit } from '@angular/core';
import { HelpDonateService } from '../../services/help-donate/help-donate.service';
import { HelpRequestService } from '../../services/help-request/help-request.service';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent{

  constructor(
    private helpRequest : HelpDonateService 
  ){}

  CurrentUser() {
    return sessionStorage.getItem('local_user')

  }
  @Input() autor = ''
  @Input() categoria = ''
  @Input() titulo = ''
  @Input() descricao = ''
  @Input() imagem = ''
  @Input() meta = ''
  @Input() helpRequestId = ''
  donate() {
    if(this.CurrentUser() == null){
      console.log(this.CurrentUser)
      window.alert('Voce precisa logar antes')
    } else {
      const valor = window.prompt('Quanto voce deseja doar?')
      if(valor){
        this.helpRequest.createDonation({
          helpId : Math.random() * 10000, 
          helpRequestId : this.helpRequestId, 
          valor : valor, 
          doador : this.CurrentUser()
        })

      }
    }
  }

}
