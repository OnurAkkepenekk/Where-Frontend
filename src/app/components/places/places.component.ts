import { FoursquareService } from './../../services/foursquare.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
})
export class PlacesComponent implements OnInit {
  location: string;
  groups:any;
  items:any;
  constructor(private foursquareAPI: FoursquareService) {}
  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition((response) => {
      this.location =
        response.coords.latitude + ',' + response.coords.longitude;
      this.getPlaces(this.location);
    });
  }
  getPlaces(location: string) {
    console.log(location);
    this.foursquareAPI
      .getPlaces(location)
      .subscribe((response) => console.log(response.response.groups[0].items[0].venue.name));
  }
}
