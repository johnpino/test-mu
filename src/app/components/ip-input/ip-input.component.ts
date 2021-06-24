import { Component, OnInit } from '@angular/core';
import { IpDataService } from 'src/app/services/ip-data.service';

@Component({
  selector: '[app-ip-input]',
  templateUrl: './ip-input.component.html',
  styleUrls: ['./ip-input.component.scss']
})
export class IpInputComponent implements OnInit {

  placeholder = "Search for any IP address or domain";

  searchItem: string;
  searchType: string;
  isValid: boolean;

  IP_REGEX = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  DOMAIN_REGEX = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/;

  constructor(private ipDataService:IpDataService) {
    this.searchItem = "";
    this.searchType = "";
    this.isValid = true;
  }

  ngOnInit(): void {
  }

  validateData() {
    this.setSearchType();
    if(this.searchType != "invalid") {
      this.isValid = true;
      this.getIpData();
    }else {
      this.isValid = false;
    }
  }

  getIpData() {
    this.ipDataService.searchIp(this.searchItem, this.searchType);
  }

  setSearchType() {
    if(this.IP_REGEX.test(this.searchItem)){
      this.searchType = "ipAddress";
    } else if(this.DOMAIN_REGEX.test(this.searchItem)) {
      this.searchType = "domain"
    } else {
      this.searchType = "invalid";
    }
  }
}
