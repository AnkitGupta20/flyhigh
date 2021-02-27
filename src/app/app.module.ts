import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectDetailComponent } from './Project-details/project-details.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectPropertiesComponent } from './project-properties/project-properties.component';
import { VariantDetailsComponent } from './variant-details/variant-details.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailComponent,
    HomeComponent,
    FooterComponent,
    ProjectOverviewComponent,
    ProjectPropertiesComponent,
    VariantDetailsComponent,
    ImageCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
