import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerCarouselComponent } from './banner-carousel/banner-carousel.component';
import { SuccessInfoBannerComponent } from './success-info-banner/success-info-banner.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { InfoWithImageComponent } from './info-with-image/info-with-image.component';
import { MackbookImageInfoComponent } from './mackbook-image-info/mackbook-image-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerCarouselComponent,
    SuccessInfoBannerComponent,
    BackToTopComponent,
    HomeBodyComponent,
    TestimonialComponent,
    InfoWithImageComponent,
    MackbookImageInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
