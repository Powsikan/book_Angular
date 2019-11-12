import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { BookPageComponent } from './pages/book-page/book-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    NavBarComponent,
    BookPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
