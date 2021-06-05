import {FourSquare } from '../models/FourSquare';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoursquareService {
  constructor(private httpClient: HttpClient) {}

  getPlaces(coord: string) {
    const endPoint = 'https://api.foursquare.com/v2/venues/explore?';
    const parameters = {
      client_id: 'DC2FDKQFF3ZQ03UGUBGVD4WKZOLRRKBVY0YKWGN5YMVBKAHU',
      client_secret: 'H5V3ZXJW0DALZQ5AJY0JWIXDB1EJ3LZAQTYXK2K43GQCPI01',
      ll: coord,
      v: '20212005',
    };

    return this.httpClient.get<FourSquare>(
      endPoint +
      new URLSearchParams(parameters)
    )
  }
  // findLocation() {
  //   navigator.geolocation.getCurrentPosition((response) => {
  //     var ordinate = response.coords.latitude + ',' + response.coords.longitude;
  //     console.log( "Bu 2 = "+ ordinate);
  //   });
  // }

  
}
