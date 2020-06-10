import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FechaComponent } from './components/fecha/fecha.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { FechaNgBootstrapComponent } from './components/fecha-ng-bootstrap/fecha-ng-bootstrap.component';


@NgModule({
  declarations: [
    AppComponent,
    FechaComponent,
    ButtonsComponent,
    FechaNgBootstrapComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
