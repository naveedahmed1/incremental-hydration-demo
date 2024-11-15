import { Component } from '@angular/core';
import { DeferedComponentComponent } from '../defered-component/defered-component.component';

@Component({
    selector: 'app-crisis-list',
  imports: [
    DeferedComponentComponent
  ],
    templateUrl: './crisis-list.component.html',
    styleUrl: './crisis-list.component.scss'
})
export default class CrisisListComponent {

}
