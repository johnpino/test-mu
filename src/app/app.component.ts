import { Component, OnInit } from '@angular/core';
import { IpDataService } from './services/ip-data.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit  {
  title = "IP Address Tracker";

  constructor(private http: HttpClient, private ipDataService: IpDataService){ }

  ngOnInit(): void {
    this.http.get("http://api.ipify.org/?format=json")
      .subscribe((res:any)=>{
        this.ipDataService.searchIp(res.ip);
      });
    
  }
}
