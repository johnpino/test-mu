import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { IpInputComponent } from './components/ip-input/ip-input.component';
import { InfoDisplayComponent } from './components/info-display/info-display.component';

import { IpDataService } from './services/ip-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    IpInputComponent,
    InfoDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LeafletModule,
    FormsModule,
    NgxMaskModule.forRoot({
      showMaskTyped : true,
    })
  ],
  providers: [
    IpDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
