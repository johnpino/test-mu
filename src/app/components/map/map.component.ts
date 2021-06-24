import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, marker, icon } from 'leaflet';
import { IpDataService } from 'src/app/services/ip-data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  center = latLng([ 49.879966, -121.726909 ]);

  icon = {
    icon: icon({
      iconSize: [ 46, 55 ],
      iconAnchor: [ 23, 55 ],
      iconUrl: 'assets/img/icon-location.svg'
    })
  };

  layer = marker([ 46.879966, -121.726909 ], this.icon);

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 17,
    center: this.center
  };

  constructor(private ipDataService:IpDataService) { }

  ngOnInit(): void {
    this.ipDataService.results
      .subscribe( ipData => {
        this.center = latLng(ipData.latLng);
        this.layer = marker(ipData.latLng, this.icon);
      });
  }

}
