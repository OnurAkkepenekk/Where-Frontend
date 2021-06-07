import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapss',
  templateUrl: './mapss.component.html',
  styleUrls: ['./mapss.component.css'],
})
export class MapssComponent implements OnInit {
  constructor() {}
  @Input() locations: any[];
  ngOnInit(): void {
  }
  zoom = 15;
}
