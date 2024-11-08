import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavLinksComponent } from './nav-links/nav-links.component';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        RouterLink,
        NavLinksComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'temp';
}
