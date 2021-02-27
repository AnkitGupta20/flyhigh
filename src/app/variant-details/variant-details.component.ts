import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectVariantType } from '../Models/Variant-type.model';

@Component({
  selector: 'app-variant-details',
  templateUrl: './variant-details.component.html',
  styleUrls: ['./variant-details.component.css']
})
export class VariantDetailsComponent implements OnInit {

  @Input()
  variantType: ProjectVariantType = new ProjectVariantType;
  @ViewChild('imageModal') imageModal: TemplateRef<any> | undefined;
  
  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }
  
  showModal() {
    this.modal.open(this.imageModal, {size: 'xl'});
  }
}
