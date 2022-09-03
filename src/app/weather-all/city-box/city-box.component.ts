import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Weather} from "../weather.model";

@Component({
  selector: 'app-city-box',
  templateUrl: './city-box.component.html',
  styleUrls: ['./city-box.component.scss']
})
export class CityBoxComponent implements OnInit {
  @Input() weather: Weather;
  @Input() unitSystem: string;

  constructor() { }

  ngOnInit(): void {
  }

}
