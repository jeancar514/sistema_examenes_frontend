import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  formGroup:FormGroup;

  constructor(private userService: UserService, private snackBar:MatSnackBar){
    this.formGroup = new FormGroup({
      name:new FormControl('',[Validators.required]),
      apellido:new FormControl('',[Validators.required]),
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required]),
    })
    console.log(this.formGroup);
  }

  submitRegister(){
    console.log(this.formGroup);
    // if(this.user.username == '' || this.user.username ){
    //   return;
    // }
    const user ={
      "username" : this.formGroup.controls['username'].value,
      "password" : this.formGroup.controls['password'].value,
      "nombre":this.formGroup.controls['name'].value,
      "apellido":this.formGroup.controls['apellido'].value,
      "email":this.formGroup.controls['email'].value,
      "telefono": this.formGroup.controls['phone'].value
    }
    this.userService.añadirUsuario(user).subscribe(
      {
        next: (data) => {
          this.openSnackError("Usuario guardado con exito","done","rgb(70, 247, 164");
        },
        error: (e) => {
          this.openSnackError("Ha ocurrido un error !!","error", "rgb(255, 73, 73)");
        },
        complete: () => console.info('complete')
    }
    )
  }

  limpiarForm(){
    console.log(this.formGroup);
    this.formGroup.controls['username'].clearValidators();
    this.formGroup.controls['password'].clearValidators();
    this.formGroup.controls['name'].clearValidators();
    this.formGroup.controls['apellido'].clearValidators();
    this.formGroup.controls['email'].clearValidators();
    this.formGroup.controls['phone'].clearValidators();
    this.formGroup.updateValueAndValidity();
    this.formGroup.reset();
    this.formGroup.controls['username'].setValidators(Validators.required);
    this.formGroup.controls['password'].setValidators(Validators.required);
    this.formGroup.controls['name'].setValidators(Validators.required);
    this.formGroup.controls['apellido'].setValidators(Validators.required);
    this.formGroup.controls['email'].setValidators(Validators.required);
    this.formGroup.controls['phone'].setValidators(Validators.required);

    this.formGroup.controls['username'].setErrors({});
    this.formGroup.controls['password'].setErrors({});
    this.formGroup.controls['name'].setErrors({});
    this.formGroup.controls['apellido'].setErrors({});
    this.formGroup.controls['email'].setErrors({});
    this.formGroup.controls['phone'].setErrors({});
  }
  openSnackError(message: string, icon:string, color:string) {
    this.snackBar.openFromComponent(AlertComponent, {
      duration:  2000,
      horizontalPosition:"right",
      verticalPosition:"top",
      data:{
        message,
        icon,
        color
      },
    });
  }

}
