import { Component } from '@angular/core';
import { DeferedChildComponent } from './defered-child-component/defered-child.component';
import { DeferedChild2Component } from './defered-child2/defered-child2.component';

@Component({
  selector: 'app-defered',
  imports: [
    DeferedChildComponent,
    DeferedChild2Component
  ],
  templateUrl: './defered.component.html',
  styleUrl: './defered.component.scss'
})
export class DeferedComponent {

}
