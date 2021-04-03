import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {
  }

  sendMail(data: any): Observable<Number> {
    return this.http.post<number>('https://flyhighrealators.herokuapp.com/sendmail', data);
}
}
