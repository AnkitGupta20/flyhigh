import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
public isDisclaimer: boolean = false;
  constructor(private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.isDisclaimer = false;
    this.router.events.subscribe((event:any) => {
      if ((event instanceof NavigationStart)) {
        console.log(event);
        const  startevent : NavigationStart = event as NavigationStart;
        if(startevent && startevent.url.includes('/project')){
          this.isDisclaimer = true;
        } else {
          //this.isDisclaimer = false;
        }
    }
    })
  }
}
