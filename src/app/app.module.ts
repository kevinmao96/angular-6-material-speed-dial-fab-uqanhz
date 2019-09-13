import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatButtonToggleModule, MatTooltipModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SpeedDialFabComponent } from './speed-dial-fab/speed-dial-fab.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule,
  MatButtonModule, MatButtonToggleModule, MatTooltipModule],
  declarations: [ AppComponent, HelloComponent, SpeedDialFabComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
