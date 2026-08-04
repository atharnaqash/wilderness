import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { About } from '../about/about';
import { TrailConditions } from '../trail-conditions/trail-conditions';
import { HeroWeather } from '../hero-weather/hero-weather';

@Component({
  selector: 'app-hero',
  imports: [About, TrailConditions, HeroWeather],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit {
  @ViewChild('heroVideo')
  heroVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.heroVideo.nativeElement;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    video.play().catch((error) => {
      console.log('Mobile autoplay blocked:', error);
    });
  }
}
