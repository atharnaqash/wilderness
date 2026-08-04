import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  scrollToGallery(): void {
    document.getElementById('gallery')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
