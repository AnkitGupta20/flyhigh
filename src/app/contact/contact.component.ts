import { Component, OnInit } from '@angular/core';
import {EmailService} from '../email.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from '../Models/project.model';
import { ProjectService } from '../Services/project.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  
  public projects = [{ID : 0, Value: 'Interested In'}]
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('',[ Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]),
    project: new FormControl('0',Validators.required),
    message: new FormControl(''),
  });

  

  submitted = false;
  success = false;
  constructor(private emailService :EmailService,private service: ProjectService) { }

  ngOnInit(): void {
    this.service.getallProjectsDetails().subscribe((data) => {
      data.forEach(item => {
        this.projects.push({ ID: item.ID, Value: item.ProjectName });
      })
    })
  }

  get controls() { return this.contactForm?.controls; }

  sendMail() {
    this.submitted = true;
    this.success = false;
    if (this.contactForm.invalid || this.controls.project.value === '0') {
      console.log('return');
      return;
  }
    const data = {
      email : this.controls.email.value, 
      name : this.controls.name.value, 
      phone : this.controls.phone.value, 
      message : this.controls.message.value
    }
    this.emailService.sendMail(data).subscribe((res) => {
      this.submitted= false;
      this.success= true;
      console.log(res);
    })
  }

}
