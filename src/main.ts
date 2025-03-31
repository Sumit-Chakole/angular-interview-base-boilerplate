import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { routes } from './app/app.routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
