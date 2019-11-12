import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import {HttpClientModule} from '@angular/common/http';
import { CardComponent } from './shared/card/card.component';
import { AuthorComponent } from './pages/author/author.component';
import { AuthorCardComponent } from './shared/author-card/author-card.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    NavBarComponent,
    BookPageComponent,
    CardComponent,
    AuthorComponent,
    AuthorCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
