import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherHeaderComponent } from './weather-header/weather-header.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatPaginatorModule} from "@angular/material/paginator";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherSearchBarComponent } from './weather-search-bar/weather-search-bar.component';
import {FormsModule} from "@angular/forms";
import { WeatherAllComponent } from './weather-all/weather-all.component';
import { CityBoxComponent } from './weather-all/city-box/city-box.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";


// @ts-ignore


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    WeatherHeaderComponent,
    WeatherSearchBarComponent,
    WeatherAllComponent,
    CityBoxComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
