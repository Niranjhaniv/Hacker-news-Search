

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { InputSearchBarComponent } from './components/input-search-bar/input-search-bar.component';
import { SearchResultItemComponent } from './components/search-result-item/search-result-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { NewsReaderComponent } from './components/news-reader/news-reader.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchResultItemComponent,
    SearchResultsComponent,
    InputSearchBarComponent,
    ButtonComponent,
    NewsReaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
