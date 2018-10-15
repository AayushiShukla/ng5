//1. Import
import { Component } from '@angular/core';

//2. Decorator - Properties that help define the structure of your component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//3. Export class component - Where all the logic resides for the application
export class AppComponent {
  title = 'ng5';
}
