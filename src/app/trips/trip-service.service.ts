import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AuthService } from '../services/auth/auth.service';
import { environment } from '../../environments/environment';


@Injectable()
export class TripServiceService {
  trips: any

  constructor( private http: Http,  public auth: AuthService ) { }

  getTrips() {
    // Create the configuration object to be able to store the Headers > Authentication
    let config = {}
    // Set the headers key
    config['headers'] = { Authorization:'Token token=' + this.auth.getUserToken()}
    // Make the delete request to URL, and add the token from Config.
    this.http.get(environment.apiOrigin + '/trips', config)
      .subscribe(
        response => {
        this.trips = JSON.parse(response['_body']).trips
       },
       err => console.log(err)
      )
  }


}