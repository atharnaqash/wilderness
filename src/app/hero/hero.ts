import { Component } from '@angular/core';

import { About } from '../about/about';
import { TrailConditions } from '../trail-conditions/trail-conditions';
import { HeroWeather } from '../hero-weather/hero-weather';

@Component({
  selector: 'app-hero',
  imports: [About, TrailConditions, HeroWeather],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
