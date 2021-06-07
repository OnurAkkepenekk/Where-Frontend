import { GroupsEntity, ItemsEntity, Venue } from './../../models/FourSquare';
import { FoursquareService } from './../../services/foursquare.service';
import { Component, OnInit } from '@angular/core';
import { FourSquare, NeOrSw } from 'src/app/models/FourSquare';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
})
export class PlacesComponent implements OnInit {
  location: string;
  locations =[{
    lat:1,
    lng:1,
  }];
  listOfLocations=[{}];
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
    this.foursquareAPI.getPlaces(location).subscribe((response) => {
      for (let index = 0; index < response.response.groups[0].items.length; index++) {
        this.locations[index] = response.response.groups[0].items[index].venue.location;
        this.listOfLocations= response.response.groups[0].items;
      }
      console.log(this.locations);
      console.log("***********************");
      console.log(this.listOfLocations);

      // this.listOfLocations.response.groups[0].items[i].venue
      // this.locations.response.groups[0].items(response.response.groups[0].items[0].venue.location.lat);
    });
  }
}
