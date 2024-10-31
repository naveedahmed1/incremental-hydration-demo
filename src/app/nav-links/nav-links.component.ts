import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.scss'
})
export class NavLinksComponent {

}
