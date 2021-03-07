import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Project } from './Models/project.model';
import { ProjectService } from './Services/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isProjectLinkDisabled: boolean = false;
  public projects: Project[] = [];
  
  constructor(private route: Router, private service: ProjectService){

  }
  ngOnInit(){

    this.service.getallProjectsDetails().subscribe((data) => {
      this.projects = data;
    })

    this.route.events.subscribe((item) => {
      
      if(item instanceof NavigationStart) {
        const url: string = (item as NavigationStart).url
        if(url.includes("/project")) {
          this.isProjectLinkDisabled = true;
        } else {
          this.isProjectLinkDisabled = false;
        }
      }
    });
  }
}
