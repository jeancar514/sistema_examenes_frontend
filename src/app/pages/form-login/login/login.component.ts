import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
