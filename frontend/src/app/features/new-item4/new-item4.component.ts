import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { ItemCardComponent } from '../../shared/components/item-card/item-card.component';
import { RouterLink, Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { HelpRequestService } from '../../shared/services/help-request/help-request.service';
import { FormsModule } from '@angular/forms';

function addDays(date:any, days:number) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

@Component({
  selector: 'app-new-item4',
  standalone: true,
  imports: [NavbarComponent,RouterLink,NgClass,ItemCardComponent, FormsModule],
  templateUrl: './new-item4.component.html',
  styleUrl: './new-item4.component.scss'
})
export class NewItem4Component {
  constructor(
    private router : Router,
    private ngzone : NgZone,
    private requestService : HelpRequestService
  ){}

  @Input() autor = ''
  @Input() userId = ''
  @Input() categoria = ''
  @Input() titulo = ''
  @Input() descricao = ''
  @Input() imagem = ''
  @Input() meta = ''
  @Input() helpId = ''
  @Output() returnScreen = new EventEmitter();

  agencia=''
  conta=''

  onContinue(){
    if(window.confirm("Deseja criar esse helpinho?")){
      const req = {

        helpId : this.helpId, 
        meta : this.meta, 
        descricao : this.descricao, 
        titulo : this.titulo, 
        solicitante : this.autor, 
        categoria : this.categoria, 
        prazo : String(addDays(Date.now(),30)), 
        imagem : this.imagem, 
        conta : this.conta, 
        agencia : this.agencia
      }
      this.requestService.createRequest(req).subscribe({
        next : res => {
          this.ngzone.run( ()=>this.router.navigate(['/home'])) 
      },
        error : err => {
            window.alert('Erro ao criar help-request')
            console.log(err)
            return false;
      }
    })
    }
  }
  
  onReturn(){
    this.returnScreen.emit()
  }

}
