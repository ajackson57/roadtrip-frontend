import { Component } from '@angular/core';
import { environment } from '../environments/environment'
import { LoginModule } from './login/login.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // apiOrgin = environment.apiOrigin;
  // title: string = 'Road Trip';
  // lat: number = 51.678418;
  // lng: number = 7.809007;
}
