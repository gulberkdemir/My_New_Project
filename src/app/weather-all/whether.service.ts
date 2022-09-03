import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Weather} from "./weather.model";
import {HttpClient} from "@angular/common/http";
import {whetherApiConfig, whetherAppConfig} from "../whether-config";

@Injectable({
  providedIn: 'root'
})
export class WhetherService {
  private unitSystem: string;
  private weather: Subject<Weather> = new Subject<Weather>();
  private currentWeatherTimestamp: number;
  private subscribers: any = {};
  private wiDataByCode: any;
  // private weatherUpdateInterval = apiConfig.updateInterval.weather;

  // @ts-ignore
  constructor(
    private http: HttpClient
    // private appService: AppService,
    // private loaderService: LoaderService,
    // private helperService: HelperService,
    // private weatherIconsService: WeatherIconsService,
  ) {
    this.unitSystem = 'metric';
    // this.wiDataByCode = wiDataByCode;
  }

  // @ts-ignore
  getWeatherWithCity(city: string): Observable<any>{
    console.log(`${whetherApiConfig.host}/weather?appid=${whetherApiConfig.appId}&q=${city}&units=${this.unitSystem}`);
    return this.http.get<any>(`${whetherApiConfig.host}/weather?appid=${whetherApiConfig.appId}&q=${city}&units=${this.unitSystem}`)

  }

  adjustResponseData(object: Weather, response: any){
    object.updateAt = new Date();
    object.humidity = response.main.humidity;
    object.sunset = response.sys.sunset;
    object.sunrise =response.sys.sunrise;
    object.windSpeed = response.wind.speed;
    object.description = response.weather[0].description;
    object.pressure = response.main.pressure;
    object.city = response.name;
    object.temp = response.main.temp;
  }
  // getWeatherByCity(city: string): Observable<any> {
  //   return Observable.interval(this.weatherUpdateInterval).startWith(0)
  //     .switchMap(() => {
  //         return this.http.get(`${whetherApiConfig.host}/weather?appid=${whetherApiConfig.host}&q=${city}&units=${this.unitSystem}`)
  //           .map((response: Response) => response.json())
  //           .map((data) => {
  //             const weather = this.handleResponseWeatherData(data);
  //
  //             this.weather.next(weather);
  //             return weather;
  //           })
  //           .catch(this.handleError);
  //       }
  //     );
  // }
  // getWeather(): Subject<Weather> {
  //   return this.weather;
  // }
  //
  // getCurrentWeatherTimestamp(): number {
  //   return this.currentWeatherTimestamp;
  // }
  //
  // getWeatherByСurrentLocation(): Promise<any> {
  //   this.showLoader();
  //   if (this.subscribers.city) {
  //     this.subscribers.city.unsubscribe();
  //   }
  //
  //   return new Promise((resolve, reject) => {
  //     window.navigator.geolocation.getCurrentPosition((position) => {
  //       const { latitude, longitude } = position.coords;
  //
  //       this.subscribers.city = this.getWeatherByLocation(latitude, longitude).subscribe((weather) => {
  //         resolve(weather.city);
  //
  //         this.hideLoader();
  //       });
  //     }, (error) => {
  //       if (error.code === 1) { // if user didn't approve geolocation
  //         this.subscribers.city = this.getWeatherByLocation(
  //           whetherAppConfig.defaultCity.coord.latitude,
  //           whetherAppConfig.defaultCity.coord.longitude
  //         ).subscribe((weather) => {
  //           resolve(weather.city);
  //
  //           this.hideLoader();
  //         });
  //       } else {
  //         console.error(error);
  //         this.hideLoader();
  //       }
  //     });
  //   });
  // }
  //
  // createResponseWeatherByCity(city: string): Promise<any> {
  //   this.showLoader();
  //   if (this.subscribers.city) {
  //     this.subscribers.city.unsubscribe();
  //   }
  //
  //   return new Promise((resolve, reject) => {
  //     this.subscribers.city = this.getWeatherByCity(city).subscribe((weather) => {
  //       resolve(weather);
  //
  //       this.hideLoader();
  //     }, (error) => {
  //       reject(error);
  //       this.hideLoader();
  //     });
  //   });
  // }
  //
  // getWeatherByLocation(latitude: number, longitude: number): Observable<any> {
  //   return Observable.interval(this.weatherUpdateInterval).startWith(0)
  //     .switchMap(() =>
  //       this.http.get(
  //         `${whetherApiConfig.host}/weather?appid=${whetherApiConfig.appId}&lat=${latitude}&lon=${longitude}&units=${this.unitSystem}`
  //       )
  //         .map((response: Response) => response.json())
  //         .map((data) => {
  //           const weather = this.handleResponseWeatherData(data);
  //
  //           this.weather.next(weather);
  //           return weather;
  //         })
  //         .catch(this.handleError)
  //     );
  // }
  //
  // getWeatherByCity(city: string): Observable<any> {
  //   return Observable.interval(this.weatherUpdateInterval).startWith(0)
  //     .switchMap(() => {
  //         return this.http.get(`${whetherApiConfig.host}/weather?appid=${whetherApiConfig.host}&q=${city}&units=${this.unitSystem}`)
  //           .map((response: Response) => response.json())
  //           .map((data) => {
  //             const weather = this.handleResponseWeatherData(data);
  //
  //             this.weather.next(weather);
  //             return weather;
  //           })
  //           .catch(this.handleError);
  //       }
  //     );
  // }
  //
  // private handleResponseWeatherData(responseData: any): Weather {
  //   const { name, main, weather, wind, sys, dt } = responseData;
  //
  //   this.currentWeatherTimestamp = dt;
  //
  //   const updateAt = new Date().getTime();
  //   const iconClassname = this.weatherIconsService.getIconClassNameByCode(weather[0].id, sys.sunset);
  //   const temperature = Math.round(main.temp);
  //   const pressureInHpa = Math.round(main.pressure);
  //   const pressure = (this.unitSystem === whetherAppConfig.defaultUnit) ?
  //     this.helperService.getPressureInMmHg(pressureInHpa) :
  //     pressureInHpa;
  //   const windDegrees = Math.round(wind.deg);
  //   const windDirection = this.helperService.getWindDirection(windDegrees);
  //   const windBeaufortScale = this.helperService.getWindBeaufortScaleByMeterInSecond(wind.speed);
  //   const sunriseTime = sys.sunrise * 1000;
  //   const sunsetTime = sys.sunset * 1000;
  //
  //   return new Weather(
  //     updateAt,
  //     name,
  //     iconClassname,
  //     temperature,
  //     main.humidity,
  //     pressure,
  //     weather[0].description,
  //     sunriseTime,
  //     sunsetTime,
  //     windDirection,
  //     wind.speed,
  //     windBeaufortScale
  //   );
  // }
  //
  // private handleError(error: any): Observable<any> {
  //   return Observable.throw(error.message || error);
  // }
  //
  // // private showLoader(): void {
  // //   this.loaderService.show();
  // // }
  // //
  // // private hideLoader(): void {
  // //   this.loaderService.hide();
  // // }
}
