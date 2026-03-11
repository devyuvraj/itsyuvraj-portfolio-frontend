import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);
  private router = inject(Router);

  private defaultSeo: SeoConfig = {
    title: 'Yuvraj Soni | Full Stack MEAN Stack Developer',
    description: 'Full Stack Developer with 7+ years in Angular, Node.js, MongoDB, RxJS, NgRx. Currently at TCS building enterprise applications.',
    keywords: 'Yuvraj Soni, Full Stack Developer, MEAN Stack, Angular, Node.js, MongoDB, TCS, Indore',
    image: 'https://www.itsyuvraj.com/assets/og-image.jpg',
    url: 'https://www.itsyuvraj.com',
    type: 'website'
  };

  init(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.updateTags(this.defaultSeo));
    this.updateTags(this.defaultSeo);
  }

  updateTags(config: Partial<SeoConfig>): void {
    const merged = { ...this.defaultSeo, ...config };

    this.title.setTitle(merged.title);

    this.meta.updateTag({ name: 'description', content: merged.description });
    if (merged.keywords) this.meta.updateTag({ name: 'keywords', content: merged.keywords });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: merged.title });
    this.meta.updateTag({ property: 'og:description', content: merged.description });
    this.meta.updateTag({ property: 'og:url', content: merged.url || '' });
    this.meta.updateTag({ property: 'og:image', content: merged.image || '' });
    this.meta.updateTag({ property: 'og:type', content: merged.type || 'website' });

    // Twitter
    this.meta.updateTag({ name: 'twitter:title', content: merged.title });
    this.meta.updateTag({ name: 'twitter:description', content: merged.description });
    this.meta.updateTag({ name: 'twitter:image', content: merged.image || '' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }
}
