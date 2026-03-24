import { Component, OnInit, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { GtmService } from '../../services/gtm.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  gtm = inject(GtmService);
  data = inject(DataService);

  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'hero';

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) this.setupScrollSpy();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) this.isScrolled = window.scrollY > 50;
  }

  private setupScrollSpy(): void {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) this.activeSection = e.target.id; }),
      { rootMargin: '-40% 0px -40% 0px' }
    );
    document.querySelectorAll('section[id]').forEach(s => obs.observe(s));
  }

  scrollTo(href: string): void {
    this.isMobileMenuOpen = false;
    if (!isPlatformBrowser(this.platformId)) return;
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.gtm.trackSectionView(href.replace('#', ''));
  }
}
