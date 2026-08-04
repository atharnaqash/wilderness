import { Component, OnInit, signal } from '@angular/core';

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
}

@Component({
  selector: 'app-news-ticker',
  imports: [],
  templateUrl: './news-ticker.html',
  styleUrl: './news-ticker.css',
})
export class NewsTicker implements OnInit {
  news = signal<NewsItem[]>([]);
  loading = signal(true);
  error = signal('');

  async ngOnInit(): Promise<void> {
    try {
      const response = await fetch('/api/news');

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const items: NewsItem[] = await response.json();

      this.news.set(items);

      console.log('News loaded:', items);
    } catch (error) {
      console.error('News loading failed:', error);

      this.error.set('Could not load news');
    } finally {
      this.loading.set(false);
    }
  }

  get loopNews(): NewsItem[] {
    const items = this.news();

    return [...items, ...items];
  }
}
