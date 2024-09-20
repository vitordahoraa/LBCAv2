import { Component, NgZone, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { RouterLink, Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-item2',
  standalone: true,
  imports: [NavbarComponent,RouterLink,NgClass, FormsModule],
  templateUrl: './new-item2.component.html',
  styleUrl: './new-item2.component.scss'
})
export class NewItem2Component implements OnInit{

  file : any
  inputDescription : any
  inputTitle : any
  constructor(
  ){}
  @Input() titleState = ''
  @Input() descriptionState = ''
  @Input() fileState : any

  @Output() returnScreen = new EventEmitter();
  @Output() fileEmitter = new EventEmitter<any>();
  @Output() titleEmitter = new EventEmitter<string>();
  @Output() descriptionEmitter = new EventEmitter<string>();
  @Output() nextScreen = new EventEmitter();
  @Output() helpRequestId = new EventEmitter<string>();

  ngOnInit(): void {
    this.inputTitle = this.titleState
    this.inputDescription=this.descriptionState
    this.file = this.fileState
  }

  onContinue(){
    if(this.inputDescription == '' || this.inputTitle == '' || !this.file)
      window.alert('Preencha todos os campos, por gentileza!')
    else{
      this.descriptionEmitter.emit(this.inputDescription)
      this.titleEmitter.emit(this.inputTitle)
      this.fileEmitter.emit(this.file)  
      this.helpRequestId.emit(btoa(this.inputTitle + this.inputDescription))
      this.nextScreen.emit();    
    }
  }

  getFile(event : any){
    const tempFile = event.target.files[0]
    const extension = tempFile.name.split('.').pop()
    if(extension == 'jpg' || extension == 'png' )
      this.file = event.target.files[0]
    else
      window.alert('Somente arquivos PNG ou JPG')
  }
  
  onReturn(){
    this.returnScreen.emit()
  }

}
