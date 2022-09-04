import {Component, Input, OnInit} from '@angular/core';
import {Weather} from "../weather.model";
import {ForecastService} from "./forecast.service";
import {Forecast} from "../forecast.model";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  @Input() forecastList :any[];
  @Input() unitSystem: string;
  @Input() cityName: string;
  finalEstimationArray : Forecast[] = []

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.forecastService.forecast.subscribe(res=>
    {this.finalEstimationArray = res;});
  }

}
