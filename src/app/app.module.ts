import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerCarouselComponent } from './banner-carousel/banner-carousel.component';
import { SuccessInfoBannerComponent } from './success-info-banner/success-info-banner.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { HomeBodyComponent } from './home-body/home-body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerCarouselComponent,
    SuccessInfoBannerComponent,
    BackToTopComponent,
    HomeBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
