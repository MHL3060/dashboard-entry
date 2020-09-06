import { Component } from '@angular/core';
import {GadgetFactory} from 'ngx-dynamic-dashboard';
import {NewsGadgetComponent} from './gadgets/news/news-gadget.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard-entry';
  constructor() {
  }
}
