import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../Models/project.model';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  @Input()
  selectedProject: Project = new Project;
  constructor() { }

  ngOnInit(): void {
  }

}
