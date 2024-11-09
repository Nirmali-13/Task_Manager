import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
registerForm : FormGroup ;
constructor(private fb : FormBuilder){
this.registerForm = this.fb.group({
  fullname:[''],
  email:[''],
  password:[''],
  confirmpassword:[''],
  role:['']
});
}
onSubmit(){
  
}
onCancel(){

}
}
