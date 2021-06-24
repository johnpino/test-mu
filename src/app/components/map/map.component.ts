import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, marker } from 'leaflet';
import { IpDataService } from 'src/app/services/ip-data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  center = latLng([ 49.879966, -121.726909 ]);
  layer = marker([ 46.879966, -121.726909 ]);

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 12,
    center: this.center
  };

  constructor(private ipDataService:IpDataService) { }

  ngOnInit(): void {
    this.ipDataService.results
      .subscribe( ipData => {
        this.center = latLng(ipData.latLng);
        this.layer = marker(ipData.latLng);
      });
  }

}
