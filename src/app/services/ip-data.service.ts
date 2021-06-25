import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpDataService {
  apiKey = "at_EqxaVrinNJLY66nPaw0HjBoCURxV6";
  apiRoot: string = "https://geo.ipify.org/api/v1";
  searchType: string;
  results: Subject<any>;
  loading: boolean;

  constructor(private http:HttpClient) {
    this.searchType = "ipAddress";
    this.results = new Subject;
    this.loading = false;
  }

  getMyIp(){
    this.http.get("https://api.ipify.org/?format=json")
      .subscribe((res:any)=>{
        this.searchIp(res.ip);
      });
  }

  searchIp(ip: string, type: string = this.searchType) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?apiKey=${this.apiKey}&${type}=${ip}`;
      this.http.get(apiURL)
        .toPromise()
        .then((response: any) => {
          let ipObject = {
            ip: response.ip,
            location: `${response.location.city}, ${response.location.country} ${response.location.postalCode}`,
            timezone: response.location.timezone,
            isp: response.isp,
            latLng: [response.location.lat, response.location.lng]
          };
          return ipObject;
        }).then( finalData => {
          this.results.next(finalData);
          resolve('');
        });
    });
  }




}
