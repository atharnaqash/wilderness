import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Gallery } from './gallery/gallery';

@Component({
  selector: 'app-root',
  imports: [Hero, Gallery],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
