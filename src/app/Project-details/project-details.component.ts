import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ImageUrl } from '../Models/image.model';
import { Project } from '../Models/project.model';
import { ProjectService } from '../Services/project.service';

@Component({
  selector: 'project-detail',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailComponent implements OnInit {
  public selectedProject : Project = new Project();
  //public Varcount: number = this.selectedProject?.Variants.
  currentImage: any = new ImageUrl();

  ngOnInit(){
    this.activateRoute.params.subscribe(params => {
      const id = params['id'];
      this.getProductDetail(id);
      });

      this.router.events.subscribe((evt :any) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
        });
  }

  ngAfterViewInit() {
    
  }

 
  constructor(private activateRoute: ActivatedRoute, private service: ProjectService,private router: Router) {
  }

private getProductDetail(id: Number) {
  this.service.getProjectDetailsById(id).subscribe((data : Project) => {
    this.selectedProject = data
    console.log(this.selectedProject);
    
    this.selectedProject.Variants[0].IsSelected = true;
    this.selectedProject.Variants[0].VariantType[0].IsSelected = true;
  })
}

getCarpetAreaString(MinCarpet : number, MaxCarpet: number) {
  return `${MinCarpet} - ${MaxCarpet}`;
}


}
