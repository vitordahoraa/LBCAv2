import { Component } from '@angular/core';
import { NewItem2Component } from '../new-item2/new-item2.component';
import { NewItem3Component } from '../new-item3/new-item3.component';
import { NewItem4Component } from '../new-item4/new-item4.component';
import { NewItemComponent } from '../new-item/new-item.component';


const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // Triggered when the reading operation is successfully completed
    reader.onload = () => {
      if (reader.result) {
        resolve(reader.result.toString());
      } else {
        reject('File could not be read.');
      }
    };

    // Triggered if an error occurs during the reading process
    reader.onerror = (error) => {
      reject(error);
    };

    // Start reading the file as a data URL (base64 string)
    reader.readAsDataURL(file);
  });
};

@Component({
  selector: 'app-new-item-controller',
  standalone: true,
  imports: [NewItemComponent,NewItem2Component,NewItem3Component,NewItem4Component],
  templateUrl: './new-item-controller.component.html',
  styleUrl: './new-item-controller.component.scss'
})


export class NewItemControllerComponent {
  currentScreen = 1

  autor = JSON.parse(String(sessionStorage.getItem('local_user'))).name
  category = ''
  title = ''
  description = ''
  target =''
  file = {}
  imagem = ''
  userId = JSON.parse(String(sessionStorage.getItem('local_user'))).userId
  helpRequestId = ''
  
 
  incrementScreen(){
    this.currentScreen++
  }

  categoryEvent(cat : any){
    this.category = cat
  }
  

  fileEvent(file : any){
    this.file = file
    
    fileToBase64(file).then((res) =>{
      this.imagem = res
      }
    )
    

  }
  

  titleEvent(title : any){
    this.title= title
  }
  
  descriptionEvent(description : any){
    this.description= description
  }
  targetEvent(tar : any){
    this.target= tar
    console.log(tar)
  }

  helpRequestIdEvent(helpId : string){
    this.helpRequestId = this.userId + ' ' + helpId
  }
  
  decrementScreen(){
    this.currentScreen--
  }

}
