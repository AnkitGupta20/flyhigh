import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  submitted = false;
  success = false;
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('',[ Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)])
  });
  constructor() { }

  ngOnInit(): void {
  }

  get controls() { return this.contactForm?.controls; }

  sendMail() {
    this.submitted = true;
    this.success = false;
    if (this.contactForm.invalid) {
      return;
  }
  this.success = true;
    const data = {
      email : this.controls.email.value, 
      name : this.controls.name.value, 
      phone : this.controls.phone.value, 
    }
    this.submitted = false
    this.contactForm.get('name')?.setValue('');
    this.contactForm.get('email')?.setValue('');
    this.contactForm.get('phone')?.setValue('');
    // this.emailService.sendMail(data).subscribe((res) => {
    //   this.submitted= false;
    //   this.success= true;
    //   console.log(res);
    // })
  }

}
