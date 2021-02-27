import { Component, OnInit } from '@angular/core';
import { Project } from '../Models/project.model';
import { ProjectService } from '../Services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public projects: Project[] = [];
  constructor(private service: ProjectService) {
  }

  ngOnInit(){
    this.service.getallProjectsDetails().subscribe((data) => {
      this.projects = data;
    })
  }

}