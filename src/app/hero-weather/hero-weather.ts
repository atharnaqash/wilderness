import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-weather',
  imports: [],
  templateUrl: './hero-weather.html',
  styleUrl: './hero-weather.css',
})
export class HeroWeather {


  rainDrops = Array.from({ length: 280 });
  leaves = Array.from({ length: 18 });
}
