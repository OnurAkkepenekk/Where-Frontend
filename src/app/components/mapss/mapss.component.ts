import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapss',
  templateUrl: './mapss.component.html',
  styleUrls: ['./mapss.component.css']
})
export class MapssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  zoom= 11;

  locations = [
    {lat: 40.2539961, lng:29.7052199},
    {lat: 40.1874133, lng:29.1425069},
    {lat: 40.225637, lng:29.177008},
    {lat: 40.207021, lng:29.112977},
    {lat: 40.102924, lng:29.097573},
    {lat: 40.216336, lng:29.078539},
    {lat: 40.207398, lng:29.29071224}
  ]

}
