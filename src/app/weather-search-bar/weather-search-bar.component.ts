import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-weather-search-bar',
  templateUrl: './weather-search-bar.component.html',
  styleUrls: ['./weather-search-bar.component.scss']
})
export class WeatherSearchBarComponent{

  searchText = '';

  constructor(
    private router: Router
  ) { }

  onClickCleanBtn() {
    this.searchText = '';
  }

  onKeyPress(e: any) {
    if (e.keyCode === 13 && e.target.value) {
      const city = e.target.value;
      console.log(city);

      // this.router.navigate([`/${city}`]);
      this.searchText = '';
    }
  }

}
