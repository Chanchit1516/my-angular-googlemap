import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MainLayoutComponent } from './shares/main-layout/main-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GraphExample1Component } from './pages/graph-example-1/graph-example-1.component';
import { GraphExample2Component } from './pages/graph-example-2/graph-example-2.component'
import { InputAutocompleteComponent } from './shares/components/input-autocomplete/input-autocomplete.component';
import { MapDisplayComponent } from './shares/components/map-display/map-display.component'


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    GraphExample1Component,
    GraphExample2Component,
    InputAutocompleteComponent,
    MapDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
