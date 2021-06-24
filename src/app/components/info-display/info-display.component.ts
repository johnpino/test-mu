import { Component, OnInit } from '@angular/core';

import { IpDataService } from 'src/app/services/ip-data.service';

@Component({
  selector: '[app-info-display]',
  templateUrl: './info-display.component.html',
  styleUrls: ['./info-display.component.scss']
})
export class InfoDisplayComponent implements OnInit {

  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;

  labelIpAddress: string;
  labelLocation: string;
  labelTimezone: string;
  labelIsp: string;

  constructor(private ipDataService: IpDataService) {
    this.ipAddress = "";
    this.location = "";
    this.timezone = "";
    this.isp = "";

    this.labelIpAddress = "Ip Address";
    this.labelLocation = "Location";
    this.labelTimezone = "Timezone";
    this.labelIsp = "ISP";
  }

  ngOnInit(): void {
    this.ipDataService.results
      .subscribe( ipData => {
        this.ipAddress = ipData.ip;
        this.location = ipData.location;
        this.timezone = "UTC " + ipData.timezone;
        this.isp = ipData.isp;
      });
  }

}
