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
import { BrandsComponent } from './brands/brands.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { QuoteComponent } from './quote/quote.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailComponent,
    HomeComponent,
    FooterComponent,
    ProjectOverviewComponent,
    ProjectPropertiesComponent,
    VariantDetailsComponent,
    ImageCarouselComponent,
    BrandsComponent,
    ContactComponent,
    QuoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
