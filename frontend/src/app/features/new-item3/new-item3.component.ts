import { Component, EventEmitter, Input, NgZone, OnInit, Output } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { RouterLink, Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-new-item3',
  standalone: true,
  imports: [NavbarComponent,RouterLink,NgClass],
  templateUrl: './new-item3.component.html',
  styleUrl: './new-item3.component.scss'
})
export class NewItem3Component implements OnInit{
  
  constructor(
  ){}

  @Output() returnScreen = new EventEmitter();
  @Output() nextScreen = new EventEmitter();
  @Output() targetEmitter = new EventEmitter();

  @Input() targetState = ''

  selectTarget = ''
  
  ngOnInit(): void {
    this.selectTarget = this.targetState  
  }
  onClickTarget(target : string){
    this.selectTarget = target
  }

  onContinue(){
    if(this.selectTarget == ''){
      window.alert('Selecione uma meta, por favor')
    } else{
      this.targetEmitter.emit(this.selectTarget)
      this.nextScreen.emit()
    }
  }
  
  onReturn(){
    this.returnScreen.emit()
  }

}
