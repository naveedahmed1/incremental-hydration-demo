import { Component } from '@angular/core';
import { DeferedComponent } from './defered-component/defered.component';

@Component({
  selector: 'app-crisis-list',
  imports: [
    DeferedComponent
  ],
  templateUrl: './crisis-list.component.html',
  styleUrl: './crisis-list.component.scss'
})
export default class CrisisListComponent {

}
