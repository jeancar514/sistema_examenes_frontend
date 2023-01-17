import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  signUpMode = false;
  signUpMode2 = false;

  public user = {
    username :'',
    password :'',
    nombre :'',
    apellido :'',
    email :'',
    telefono :'',
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  signInBtn(): void{
    this.signUpMode = false;
  }
  signUpBtn():void{
    this.signUpMode = true;
  }

  constructor(private userService: UserService){}

  formSumit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username ){
      return;
    }

    this.userService.añadirUsuario(this.user).subscribe(
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
