import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-trail-conditions',
  imports: [DatePipe],
  templateUrl: './trail-conditions.html',
  styleUrl: './trail-conditions.css',
})
export class TrailConditions implements OnInit, OnDestroy {
  currentTime = signal(new Date());

  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.currentTime.set(new Date());
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
