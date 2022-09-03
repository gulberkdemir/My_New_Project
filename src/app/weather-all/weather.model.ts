export class Weather {
  updateAt: Date;
  city: string;
  temp: number;
  humidity: number;
  pressure: number;
  description: string;
  sunrise: number;
  sunset: number;
  windSpeed: number;
  constructor(
    updateAt: Date,
    city: string,
    temp: number,
    humidity: number,
    pressure: number,
    description: string,
    sunrise: number,
    sunset: number,
    windDirection: string,
    windSpeed: number
  ) {
    this.updateAt = updateAt;
    this.city = city;
    this.temp = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.description = description;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.windSpeed = windSpeed;
  }
}
