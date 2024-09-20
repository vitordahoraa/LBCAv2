import { Component, EventEmitter, NgZone, Output, Input, OnInit} from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { RouterLink, Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-new-item',
  standalone: true,
  imports: [NavbarComponent,RouterLink,NgClass],
  templateUrl: './new-item.component.html',
  styleUrl: './new-item.component.scss'
})
export class NewItemComponent implements OnInit{

  constructor(
  ){}


  selectCategory = ''

  ngOnInit(): void {
    this.selectCategory = this.categoryState
    console.log(this.selectCategory)
  }

  @Output() categoryEmitter = new EventEmitter<string>()
  @Output() nextScreen = new EventEmitter();

  @Input() categoryState = ''

  onClickCategory(category : string){
    this.selectCategory = category
  }

  onContinue(){
    if(this.selectCategory==''){
      window.alert('Selecione uma categoria, por favor')
    } else{

      this.categoryEmitter.emit(this.selectCategory)
      this.nextScreen.emit()

    }
  }

}
