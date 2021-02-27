import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageUrl } from '../Models/image.model';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit {

  @Input() images: ImageUrl[] = []
  @Input() isEnlarge: boolean = false
  currentImage: any = new ImageUrl();
  @ViewChild('imageModal') imageModal: TemplateRef<any> | undefined;
  
  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  openImagesInModal(id: number) {
    if(this.isEnlarge) {
        this.modal.open(this.imageModal,{size:'xl'});
    }
  }

  onIndicatorClick(id: number) {
    // alert(id);
    this.images.forEach(item => {
      if (item.id === id) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    });
  }
  
  OnPreClick() {
    this.currentImage = this.images.find(item => item.isActive === true);
    // tslint:disable-next-line:prefer-const
    let currentImageIndex = this.images.indexOf(this.currentImage);
    // tslint:disable-next-line:prefer-const
    let id = this.images.length;
    if (currentImageIndex === 0) {
      this.setImageActiveValue(id - 1);
    } else {
      this.setImageActiveValue(currentImageIndex - 1);
    }
  }
  
  OnNextClick() {
    this.currentImage = this.images.find(item => item.isActive === true);
    // tslint:disable-next-line:prefer-const
    let currentImageIndex = this.images.indexOf(this.currentImage);
    // tslint:disable-next-line:prefer-const
    let id = this.images.length;
    if (currentImageIndex + 1 === id) {
      this.setImageActiveValue(0);
    } else {
      this.setImageActiveValue(currentImageIndex + 1);
    }
  }
  
  setImageActiveValue(id: number) {
    this.currentImage = this.images[id];
    this.images.forEach(item => {
      if (item.id === this.currentImage.id) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    });
  }

}
