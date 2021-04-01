import { Component, OnInit } from '@angular/core';
import {EmailService} from '../email.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('',[ Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]),
    subject: new FormControl('',Validators.required),
    message: new FormControl(''),
  });

  

  submitted = false;
  success = false;
  constructor(private emailService :EmailService) { }

  ngOnInit(): void {
    
  }

  get controls() { return this.contactForm?.controls; }

  sendMail() {
    console.log(this.controls.phone);
    
    this.submitted = true;
    this.success = false;
    if (this.contactForm.invalid) {
      return;
  }
    const data = {
      email : this.controls.email.value, 
      name : this.controls.name.value, 
      phone : this.controls.phone.value, 
      subject : this.controls.subject.value,
      message : this.controls.message.value
    }
    console.log(data);
    
    this.emailService.sendMail(data).subscribe((res) => {
      this.submitted= false;
      this.success= true;
      console.log(res);
    })
  }

}
