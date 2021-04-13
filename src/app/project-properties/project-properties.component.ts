import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../Models/project.model';

@Component({
  selector: 'app-project-properties',
  templateUrl: './project-properties.component.html',
  styleUrls: ['./project-properties.component.css']
})
export class ProjectPropertiesComponent implements OnInit {

  @Input()
  selectedProject: Project = new Project;
  @ViewChild('formmodal') formmodal: TemplateRef<any> | undefined;
  
  
  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }
  

  onSelectedVariant(id: Number){
    this.selectedProject.Variants.forEach((item) => {
      if(item.ID === id) {
        item.IsSelected = true
        for (let index = 0; index < item.VariantType.length; index++) {
          if(index ===0) {
          item.VariantType[index].IsSelected = true;
          } else  {
            item.VariantType[index].IsSelected = false;
            }
          
        }
      } else {
        item.IsSelected = false;
        for (let index = 0; index < item.VariantType.length; index++) {
            item.VariantType[index].IsSelected = false;
        }
      }
    });
  }
  onSelectedVariantType(id: Number, VariantId: Number){
    this.selectedProject.Variants.forEach((item) => {
      if(item.ID === id) {
        item.VariantType.forEach(param => {
          if(param.VariantId === VariantId ) {
            param.IsSelected = true
          }
          else {
            param.IsSelected = false;
          }
        })
      }
    });
  }
  onGetQuoteClick(selectedProject: Project) {
    this.modal.open(this.formmodal, {size: 'md'});
  }

  

}
