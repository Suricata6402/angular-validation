import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Hello';
  myForm = new FormControl();
  myLoginForm;
  myValidator (arg) {
    console.log(arg.value.length > 10);
    return arg.value.length > 10;
  };

  constructor () {
    const {myValidator} = this;
    this.myLoginForm = new FormGroup({
      login: new FormControl('123', [
      ]),
      password: new FormControl()
    });
    console.log(this.myForm);
    console.log(this.myLoginForm);
    console.log(Validators);
  };
};
