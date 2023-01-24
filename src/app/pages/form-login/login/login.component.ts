import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formGroup: FormGroup;
  

  constructor(private userService: UserService){
    this.formGroup = new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
    })
  }

  submitLogin(){
    //console.log(this.user);
    console.log(this.formGroup.controls);
    // if(this.user.username == '' || this.user.username ){
    //   return;
    // }
    const user ={
      "username" : this.formGroup.controls['username'].value,
      "password" : this.formGroup.controls['password'].value,
      "nombre":"leo",
      "apellido":"sanchez",
      "email":"leo@gmeil.com",
      "telefono": "999985"
    }
    this.userService.añadirUsuario(user).subscribe(
      {
        next: (data) => {
          console.log(data)
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
    }
    )
  }
}
