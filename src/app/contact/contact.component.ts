import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  username: string = '';
  userage: string ='' ;
  useremail: string = '';
  userpass: string = '';
changeplace(inputs:string){
  return inputs.length >0
  
}
}
