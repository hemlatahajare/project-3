import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, ReactiveFormsModule, FormsModule, FormControl, Validators, AbstractControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
// import { Subject } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  emailId: any = "hajarehemlata83@gmail.com";
  public editorValue: string = '';    //ck editor
  emailForm!: FormGroup;     //declaring form group
  ApiResult: any;
  submitted: boolean = false;
  email!: AbstractControl;
  name!: AbstractControl;
  subject!: AbstractControl;
  message!: AbstractControl;

  constructor(private fb: FormBuilder, private mainService: MainService, private router: Router) { }

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Name: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
    this.email = this.emailForm.controls['email'];
    this.name = this.emailForm.controls['name'];
    this.subject = this.emailForm.controls['subject'];
    this.message = this.emailForm.controls['message'];
  }
  get f() { return this.emailForm.controls; }
  submitMyForm() {
    this.submitted = true;
    console.warn(this.emailForm.value)
  }

  Email_send() {
    debugger
    this.submitted = true;
    if (this.emailForm.invalid) {
      return;
    }
    var name = this.emailForm.get("Name")!.value;
    var message = this.emailForm.get("message")!.value;
    var subject = this.emailForm.get("subject")!.value;
    var email = this.emailForm.get("email")!.value;
    var EmailBodyMsg = "<table ><thead><tr><th>Harshali Hajare</th></tr></thead><tbody><tr><td>Name:</td><td>" + name + "</td></tr><tr><td>Email</td><td>" + email + "</td></tr><tr><td>Message:</td><td>" + message + "</td></tr><tr><td>Subject:</td><td>" + subject + "</td></tr></tbody></table>";
    var Moobj: any = {};
    Moobj.EmailSubject = "For Contact Us";
    Moobj.EmailTo = this.emailId;
    Moobj.PkSystemEmailSetting = 4;
    Moobj.message = EmailBodyMsg;
    this.mainService.emailMethod(Moobj).subscribe((value: any) => {
      this.ApiResult = value;
      console.log(this.emailForm.value);
    });
    alert("Send Request Successfully");
    this.Reset();

  }
  Reset() {
    this.submitted = false;
    this.emailForm.reset();
  }



}



