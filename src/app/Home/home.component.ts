import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../Models/project.model';
import { ProjectService } from '../Services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public projects: Project[] = [];
  @ViewChild('ourProject') ourProject: ElementRef | undefined;
  @ViewChild('contact') contact: ElementRef | undefined;

  constructor(private activateRoute: ActivatedRoute, private service: ProjectService,private router: Router) {
  }

  ngOnInit(){
    this.service.getallProjectsDetails().subscribe((data) => {
      this.projects = data;
    })
  }

  ngAfterViewInit() {
    this.scrollToContent();
  }

  private scrollToContent() {
    this.activateRoute.queryParams.subscribe((param) => {
      if(param && param.id === 'projects') {
        //this.ourProject?.nativeElement.scrollIntoView({behaviour:'smooth'});
      }
      if(param && param.id === 'contact') {
        //this.contact?.nativeElement.scrollIntoView({behaviour:'smooth'});
      }
    });
  }

}