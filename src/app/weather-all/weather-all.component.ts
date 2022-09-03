import {AfterContentChecked, Component, DoCheck, Input, OnDestroy, OnInit} from '@angular/core';
import {WhetherService} from "./whether.service";
import {Weather} from "./weather.model";
import {Subscription, take} from "rxjs";
import {SearchService} from "../weather-search-bar/search.service";
import {GeneralserviceService} from "../shared/generalservice.service";

@Component({
  selector: 'app-weather-all',
  templateUrl: './weather-all.component.html',
  styleUrls: ['./weather-all.component.scss']
})
export class WeatherAllComponent implements OnInit, OnDestroy {
  private citySubscription: Subscription;
  private _weatherSubscription: Subscription;
  weather: any;
  cityResult: string;
  // @ts-ignore
  weatherModelObject: Weather = new Weather();


  constructor(
    // private appService: AppService,
    private searchService: SearchService,
    private weatherService: WhetherService,
    private generalservice: GeneralserviceService
    // private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    // this.route.data.subscribe(
    //   (data: { weather: Weather }) => {
    //     this.weather = data.weather;
    //   }
    // );

    this.citySubscription = this.searchService.searchResult.subscribe(
      res => {this.cityResult = res;
        if(this.cityResult !== null && this.cityResult !== undefined){
          console.log(this.cityResult, 'r');
          this._weatherSubscription = this.weatherService.getWeatherWithCity(this.cityResult).subscribe(weather => {
            this.weather = weather;
            console.log(this.weather);
            this.weatherService.adjustResponseData(this.weatherModelObject,this.weather);
            console.log(this.weatherModelObject);

          });
        }
      }
    )
  }



  ngOnDestroy() {
    this._weatherSubscription.unsubscribe();
    this.citySubscription.unsubscribe();
  }

}
