import { Component, OnInit } from '@angular/core';

import { IpDataService } from 'src/app/services/ip-data.service';

@Component({
  selector: 'app-info-display',
  templateUrl: './info-display.component.html',
  styleUrls: ['./info-display.component.scss']
})
export class InfoDisplayComponent implements OnInit {

  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;

  constructor(private ipDataService: IpDataService) {
    this.ipAddress = "";
    this.location = "";
    this.timezone = "";
    this.isp = "";
  }

  ngOnInit(): void {
    this.ipDataService.results
      .subscribe( ipData => {
        this.ipAddress = ipData.ip;
        this.location = ipData.location;
        this.timezone = ipData.timezone;
        this.isp = ipData.ips;
      });
  }

}
