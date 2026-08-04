import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Gallery } from './gallery/gallery';
import { NewsTicker } from './news-ticker/news-ticker';

@Component({
  selector: 'app-root',
  imports: [Hero, Gallery, NewsTicker],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
