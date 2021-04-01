import { Component, OnInit } from '@angular/core';
import {EmailService} from '../email.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private emailService :EmailService) { }

  ngOnInit(): void {
  }

  sendMail() {
    const data = {email : 'akki.gupta20@gmail.com'}
    this.emailService.sendMail(data).subscribe((res) => {
      console.log(res);
    })
  }

}
