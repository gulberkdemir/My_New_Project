import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Weather} from "../weather.model";
import {whetherApiConfig} from "../../whether-config";
import {GeneralserviceService} from "../../shared/generalservice.service";

@Component({
  selector: 'app-city-box',
  templateUrl: './city-box.component.html',
  styleUrls: ['./city-box.component.scss']
})
export class CityBoxComponent implements OnInit {
  @Input() weather: Weather;
  @Input() unitSystem: string;
  measurementUnits: string;
  private clocktimeSubscripction: Subscription;
  time: Date;

  constructor(private generalService: GeneralserviceService) { }

  ngOnInit(): void {
    console.log('ffff', this.weather);
    this.measurementUnits = whetherApiConfig.measurementUnits['metric'].temperature;
  }

}
