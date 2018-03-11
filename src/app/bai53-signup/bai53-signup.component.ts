import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-bai53-signup',
  templateUrl: './bai53-signup.component.html',
  styleUrls: ['./bai53-signup.component.css']
})
export class Bai53SignupComponent implements OnInit {
  formSignUp: FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.formSignUp = this.fb.group({
      email: ['phanvan91@gmail.com',Validators.required],
      password: [],
      subject: this.fb.group({
        angular:[false],
        nodejs: [false],
        php:  [true]
      })
    });
  }
  OnSubmit() {
    console.log(this.formSignUp.value);
  }
}
