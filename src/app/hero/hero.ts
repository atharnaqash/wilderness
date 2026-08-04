import { Component } from '@angular/core';
import { About } from '../about/about';
import { TrailConditions } from '../trail-conditions/trail-conditions';

@Component({
  selector: 'app-hero',
  imports: [About, TrailConditions],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
