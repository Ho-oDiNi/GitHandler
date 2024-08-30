import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})
export class InputFormComponent {
  
  input_text: string = "";
  
  search(){
    console.log(this.input_text);
  }

}
