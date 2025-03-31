import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from '../main';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [App, HomeComponent, AboutComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
