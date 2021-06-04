import { SingleResponseModel } from './../models/singleResponseModel';
import { PlaceDetailsModel } from './../models/place-detailsModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceDetailService {
  apiUrl = 'https://localhost:44380/api/';
  constructor(private httpClient: HttpClient) { }

  getPlaceDetail(placeId:number){
    let newPath = this.apiUrl + 'places/GetPlaceDetails?placeId=' + placeId;
    console.log(newPath);
    return this.httpClient.get<SingleResponseModel<PlaceDetailsModel>>(newPath);
  }
}
