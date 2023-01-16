import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signUpMode = false;
  signUpMode2 = false;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  signInBtn(): void{
    this.signUpMode = false;
  }
  signInBtn2():void{
    this.signUpMode2 = false;
  }
  signUpBtn():void{
    this.signUpMode = true;
  }
  signUpBtn2():void{
    this.signUpMode2 = true;
  }
}
